import {
  collection,
  CollectionReference,
  DocumentData,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/firebase";
import { MessageState } from "@/types";
import { useAppSelector } from "@/app/hooks";

const useSubCollection = () => {
  const [messageList, setMessageList] = useState<MessageState[]>([]);
  const { channelId } = useAppSelector((state) => state.channel);

  useEffect(() => {
    if (!channelId) {
      return;
    }

    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      "channels",
      channelId,
      "messages"
    );

    const collectionRefOrderBy = query(
      collectionRef,
      orderBy("timestamp", "desc")
    );

    onSnapshot(collectionRefOrderBy, (snapshot) => {
      const res = snapshot.docs.reduce<MessageState[]>((accu, curr) => {
        return [
          ...accu,
          {
            id: curr.id,
            message: curr.data().message,
            timestamp: curr.data().timestamp,
            user: curr.data().user,
          },
        ];
      }, []);

      setMessageList(res);
    });
  }, [channelId]);

  return { messageList };
};

export default useSubCollection;
