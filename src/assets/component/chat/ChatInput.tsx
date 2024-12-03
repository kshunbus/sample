import React, { useRef, MouseEvent, RefObject, memo } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import {
  addDoc,
  collection,
  CollectionReference,
  DocumentData,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/firebase";
import { useAppSelector } from "@/app/hooks";
import "./ChatInput.scss";

type Props = {
  scrollRef: RefObject<HTMLDivElement>;
};

const ChatInput = ({ scrollRef }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const { channelId } = useAppSelector((state) => state.channel);
  const user = useAppSelector((state) => state.user.user);

  const sendMessage = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!ref.current || !channelId) {
      return;
    }

    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      "channels",
      channelId,
      "messages"
    );

    await addDoc(collectionRef, {
      message: ref.current.value,
      timestamp: serverTimestamp(),
      user,
    });

    // 入力フォームクリア
    ref.current.value = "";

    // 入力完了後、チャット上部まで自動スクロール
    scrollRef?.current?.scrollIntoView();
  };

  return (
    <>
      <AddCircleOutlineIcon />

      <form>
        <input ref={ref} type="text" placeholder="#Udemyへメッセージを送信" />
        <button type="submit" className="chatInputButton" onClick={sendMessage}>
          送信
        </button>
      </form>

      <div className="chatInputIcons">
        <CardGiftcardIcon />
        <GifIcon />
        <EmojiEmotionsIcon />
      </div>
    </>
  );
};

export default memo(ChatInput);
