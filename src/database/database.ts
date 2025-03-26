import { addRxPlugin, createRxDatabase, RxDatabase } from "rxdb";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
import { wrappedValidateAjvStorage } from "rxdb/plugins/validate-ajv";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { RxDBMigrationSchemaPlugin } from "rxdb/plugins/migration-schema";
import { RxDBQueryBuilderPlugin } from "rxdb/plugins/query-builder";
import {
  CHARACTERS_COLLECTION,
  CharacterCollection,
} from "./collections/Character";

export type TestDatabaseCollections = {
  characters: CharacterCollection;
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
    characters: CHARACTERS_COLLECTION,
  });

  return db;
};
