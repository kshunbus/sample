import React, { memo } from "react";
import "./SidebarChannel.scss";
import { type Channel } from "@/types";
import { useAppDispatch } from "@/app/hooks";
import { setChannelInfo } from "@/features/channelSlice";

const SidebarChannel = ({ id, channel }: Channel) => {
  const dispatch = useAppDispatch();

  const changeChannel = () => {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channel.channel.channelName,
      })
    );
  };

  return (
    <div className="sidebarChannel" onClick={changeChannel}>
      <h4>
        <span className="sidebarChannelHash">#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
};

export default memo(SidebarChannel);
