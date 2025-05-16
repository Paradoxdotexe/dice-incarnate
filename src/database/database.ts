import { addRxPlugin, createRxDatabase, RxCollection, RxDatabase } from 'rxdb';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { wrappedValidateAjvStorage } from 'rxdb/plugins/validate-ajv';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { RxDBMigrationSchemaPlugin } from 'rxdb/plugins/migration-schema';
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
import { CHARACTER_COLLECTION, CharacterCollection } from './collections/Character';
import { CHARACTER_CLASS_COLLECTION, CharacterClassCollection } from './collections/CharacterClass';
import {
  CHARACTER_CLASS_FEATURE_COLLECTION,
  CharacterClassFeatureCollection,
} from './collections/CharacterClassFeature';
import { CHARACTER_CLASSES } from './static/CHARACTER_CLASSES';
import { CHARACTER_CLASS_FEATURES } from './static/CHARACTER_CLASS_FEATURES';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection as getFirestoreCollection, Firestore } from 'firebase/firestore';
import { replicateFirestore } from 'rxdb/plugins/replication-firestore';
import { RxDBLeaderElectionPlugin } from 'rxdb/plugins/leader-election';
import { isDev } from '../utils/isDev';
import { disableWarnings } from 'rxdb/plugins/dev-mode';
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';

export type DatabaseCollections = {
  character: CharacterCollection;
  characterClass: CharacterClassCollection;
  characterClassFeature: CharacterClassFeatureCollection;
};

export type Database = RxDatabase<DatabaseCollections>;

export const initDatabase = async () => {
  if (isDev()) {
    disableWarnings();
    addRxPlugin(RxDBDevModePlugin);
  }
  addRxPlugin(RxDBMigrationSchemaPlugin);
  addRxPlugin(RxDBQueryBuilderPlugin);
  addRxPlugin(RxDBLeaderElectionPlugin);
  addRxPlugin(RxDBUpdatePlugin);

  const db = await createRxDatabase<DatabaseCollections>({
    name: 'dice-incarnate-database',
    storage: wrappedValidateAjvStorage({ storage: getRxStorageDexie() }),
    closeDuplicates: true,
  });

  await db.addCollections({
    character: CHARACTER_COLLECTION,
    characterClass: CHARACTER_CLASS_COLLECTION,
    characterClassFeature: CHARACTER_CLASS_FEATURE_COLLECTION,
  });

  // replicate collections to Firestore
  const firestore = initFirestore();
  Object.values(db.collections).forEach((collection) => replicateCollection(firestore, collection));

  if (isDev()) {
    // @ts-ignore
    window.sync_static = async () => {
      console.log('Syncing static data...');
      await db.collections.characterClass.bulkUpsert(CHARACTER_CLASSES);
      await db.collections.characterClassFeature.bulkUpsert(CHARACTER_CLASS_FEATURES);
      console.log('Done.');
    };

    // @ts-ignore
    window.purge_character = async (id: string) => {
      console.log('Purging character data...');
      await db.collections.character
        .find({
          selector: {
            id: {
              $eq: id,
            },
          },
        })
        .remove();
      console.log('Done.');
    };
  }

  return db;
};

const initFirestore = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCFKPvTBPaTOj416NpAt8UtuqPv4jz6ffo',
    authDomain: 'dice-incarnate.firebaseapp.com',
    projectId: 'dice-incarnate',
    storageBucket: 'dice-incarnate.firebasestorage.app',
    messagingSenderId: '37402429798',
    appId: '1:37402429798:web:e3deed058a11d4c35b20a7',
  };

  const firebase = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

  return getFirestore(firebase);
};

const replicateCollection = async (firestore: Firestore, collection: RxCollection) => {
  replicateFirestore({
    replicationIdentifier: `${collection.name}-replication`,
    collection,
    firestore: {
      projectId: 'dice-incarnate',
      database: firestore,
      collection: getFirestoreCollection(firestore, collection.name),
    },
    live: true,
    deletedField: '_deleted',
    serverTimestampField: 'serverTimestamp',
    // replicate from Firestore to IndexedDB
    pull: { batchSize: 10 },
    // replicate from IndexedDB to Firestore (only in DEV MODE)
    push: isDev() ? { batchSize: 10 } : undefined,
  });
};
