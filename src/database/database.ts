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

export type DatabaseCollections = {
  character: CharacterCollection;
  characterClass: CharacterClassCollection;
  characterClassFeature: CharacterClassFeatureCollection;
};

export type Database = RxDatabase<DatabaseCollections>;

export const initDatabase = async () => {
  addRxPlugin(RxDBDevModePlugin);
  addRxPlugin(RxDBMigrationSchemaPlugin);
  addRxPlugin(RxDBQueryBuilderPlugin);
  addRxPlugin(RxDBLeaderElectionPlugin);

  const db = await createRxDatabase<DatabaseCollections>({
    name: 'dice-incarnate-database',
    storage: wrappedValidateAjvStorage({ storage: getRxStorageDexie() }),
    cleanupPolicy: {
      minimumDeletedTime: 1000 * 60 * 60 * 24, // one day
    },
  });

  await db.addCollections({
    character: CHARACTER_COLLECTION,
    characterClass: CHARACTER_CLASS_COLLECTION,
    characterClassFeature: CHARACTER_CLASS_FEATURE_COLLECTION,
  });

  // upsert static data
  db.collections.characterClass.bulkUpsert(CHARACTER_CLASSES);
  db.collections.characterClassFeature.bulkUpsert(CHARACTER_CLASS_FEATURES);

  // replicate collections to Firestore
  const firestore = initFirestore();
  Object.values(db.collections).forEach((collection) => {
    replicateCollection(firestore, collection);
  });

  return db;
};

const initFirestore = () => {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: 'dice-incarnate.firebaseapp.com',
    projectId: 'dice-incarnate',
    storageBucket: 'dice-incarnate.firebasestorage.app',
    messagingSenderId: '37402429798',
    appId: '1:37402429798:web:e3deed058a11d4c35b20a7',
  };

  const firebase = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

  return getFirestore(firebase);
};

const replicateCollection = (firestore: Firestore, collection: RxCollection) => {
  replicateFirestore({
    replicationIdentifier: `${collection.name}-replication`,
    collection,
    firestore: {
      projectId: 'dice-incarnate',
      database: firestore,
      collection: getFirestoreCollection(firestore, collection.name),
    },
    pull: { batchSize: 10 },
    push: { batchSize: 10 },
    deletedField: '_deleted',
    serverTimestampField: 'serverTimestamp',
  });
};
