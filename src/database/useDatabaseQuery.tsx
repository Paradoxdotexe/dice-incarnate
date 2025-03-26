import { useEffect, useMemo, useState } from "react";
import { TestDatabaseCollections } from "./database";
import { useDatabaseCollection } from "./useDatabaseCollection";

export const useDatabaseQuery = <
  TCollectionKey extends keyof TestDatabaseCollections,
  TCollection extends TestDatabaseCollections[TCollectionKey],
  TCollectionQuery extends Parameters<TCollection["find"]>[0],
  TDocuments extends Awaited<
    ReturnType<ReturnType<TCollection["find"]>["exec"]>
  >
>(
  collectionKey: TCollectionKey,
  queryObj?: TCollectionQuery
): TDocuments | undefined => {
  const collection = useDatabaseCollection(collectionKey);

  const [documents, setDocuments] = useState<TDocuments>();

  useEffect(() => {
    const query = collection.find(queryObj);

    const subscription = query.$.subscribe((documents) =>
      setDocuments(documents as TDocuments)
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return documents;
};
