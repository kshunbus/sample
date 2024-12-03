import { memo } from "react";
import "./ChatMessage.scss";
import { Avatar } from "@mui/material";
import { MessageState } from "@/types";

type Props = {
  msg: MessageState;
};

const ChatMessage = ({ msg }: Props) => {
  if (!msg.user) {
    return;
  }

  return (
    <div className="message">
      <Avatar src={msg.user.photo} />
      <div className="messageInfo">
        <h4>
          {msg.user.displayName}
          <span className="messageTimestamp">
            {new Date(msg.timestamp?.toDate()).toLocaleString()}
          </span>
        </h4>
        <p>{msg.message}</p>
      </div>
    </div>
  );
};

export default memo(ChatMessage);
