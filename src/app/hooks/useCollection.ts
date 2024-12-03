import { db } from "@/firebase";
import { Channel } from "@/types";
import {
  collection,
  DocumentData,
  onSnapshot,
  type Query,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

const useCollection = (collectionName: string) => {
  const [documents, setDocuments] = useState<Channel[]>([]);

  const q: Query<DocumentData> = query(collection(db, collectionName));

  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      const res = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        channel: doc.data(),
      }));
      setDocuments(res);
    });
  }, []);

  return { documents };
};

export default useCollection;
