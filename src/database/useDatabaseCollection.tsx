import { useRxDB } from "rxdb-hooks";
import { TestDatabase, TestDatabaseCollections } from "./database";

export const useDatabaseCollection = <
  TCollectionKey extends keyof TestDatabaseCollections,
  TCollection extends TestDatabaseCollections[TCollectionKey]
>(
  collectionKey: TCollectionKey
): TCollection => {
  const db: TestDatabase = useRxDB();

  return db.collections[collectionKey] as TCollection;
};
