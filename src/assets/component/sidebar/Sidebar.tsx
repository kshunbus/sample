import React, { memo, useEffect, useState } from "react";
import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { logout } from "@/features/userSlice";
import useCollection from "@/app/hooks/useCollection";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  const { documents } = useCollection("channels");

  const addChannel = async () => {
    let channelName = prompt("新しいチャンネルを作成します。");

    if (channelName) {
      await addDoc(collection(db, "channels"), {
        channelName,
      });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="/discordIcon.png" alt="" />
        </div>
      </div>

      {/* sidebarRight */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>

        {/* sidebarChannels */}
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className="sidebarAddIcon" onClick={addChannel} />
          </div>

          <div className="sidebarChannelList">
            {documents.map((cnl) => (
              <SidebarChannel key={cnl.id} id={cnl.id} channel={cnl} />
            ))}
          </div>

          <div className="sidebarFooter">
            <div className="sidebarAccount">
              <img src={user?.photo} alt="" onClick={handleLogout} />
              <div className="accountName">
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
              </div>
            </div>

            <div className="sidebarVoice">
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Sidebar);
