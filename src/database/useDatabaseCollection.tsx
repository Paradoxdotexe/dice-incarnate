import { useRxDB } from 'rxdb-hooks';
import { Database, DatabaseCollections } from './database';

export const useDatabaseCollection = <
  TCollectionKey extends keyof DatabaseCollections,
  TCollection extends DatabaseCollections[TCollectionKey]
>(
  collectionKey: TCollectionKey
): TCollection => {
  const db: Database = useRxDB();

  return db.collections[collectionKey] as TCollection;
};
