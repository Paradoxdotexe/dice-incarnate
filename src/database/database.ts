import { addRxPlugin, createRxDatabase, RxDatabase } from "rxdb";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
import { wrappedValidateAjvStorage } from "rxdb/plugins/validate-ajv";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { RxDBMigrationSchemaPlugin } from "rxdb/plugins/migration-schema";
import { RxDBQueryBuilderPlugin } from "rxdb/plugins/query-builder";
import {
  CHARACTER_COLLECTION,
  CharacterCollection,
} from "./collections/Character";
import {
  CHARACTER_CLASS_COLLECTION,
  CharacterClassCollection,
} from "./collections/CharacterClass";
import {
  CHARACTER_CLASS_FEATURE_COLLECTION,
  CharacterClassFeatureCollection,
} from "./collections/CharacterClassFeature";
import { CHARACTER_CLASSES } from "./static/CHARACTER_CLASSES";
import { CHARACTER_CLASS_FEATURES } from "./static/CHARACTER_CLASS_FEATURES";

export type TestDatabaseCollections = {
  character: CharacterCollection;
  characterClass: CharacterClassCollection;
  characterClassFeature: CharacterClassFeatureCollection;
};

export type TestDatabase = RxDatabase<TestDatabaseCollections>;

export const initDatabase = async () => {
  addRxPlugin(RxDBDevModePlugin);
  addRxPlugin(RxDBMigrationSchemaPlugin);
  addRxPlugin(RxDBQueryBuilderPlugin);

  const db = await createRxDatabase<TestDatabaseCollections>({
    name: "dice-incarnate-database",
    storage: wrappedValidateAjvStorage({ storage: getRxStorageDexie() }),
  });

  await db.addCollections({
    character: CHARACTER_COLLECTION,
    characterClass: CHARACTER_CLASS_COLLECTION,
    characterClassFeature: CHARACTER_CLASS_FEATURE_COLLECTION,
  });

  // upsert static data
  db.collections.characterClass.bulkUpsert(CHARACTER_CLASSES);
  db.collections.characterClassFeature.bulkUpsert(CHARACTER_CLASS_FEATURES);

  return db;
};
