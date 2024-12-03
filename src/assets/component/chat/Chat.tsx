import React, { memo, useRef, useState, MouseEvent, useEffect } from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

import useSubCollection from "@/app/hooks/useSubCollection";

const Chat = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { messageList } = useSubCollection();

  return (
    <div className="chat">
      <div ref={scrollRef} />
      <ChatHeader />

      <div className="chatMessage">
        {messageList.map((msg) => (
          <ChatMessage key={msg.id} msg={msg} />
        ))}
      </div>

      <div className="chatInput">
        <ChatInput scrollRef={scrollRef} />
      </div>
    </div>
  );
};

export default memo(Chat);
