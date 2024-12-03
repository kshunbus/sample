import { type Timestamp, type DocumentData } from "firebase/firestore";

export interface UserState {
  uid: string;
  photo: string;
  email: string;
  displayName: string;
}

export interface InitialUserState {
  user: null | UserState;
}

export interface Channel {
  id: string;
  channel: DocumentData;
}

export interface ChannelState {
  channelId?: string;
  channelName?: string;
}

export interface MessageState {
  id: string;
  message: string;
  timestamp: Timestamp;
  user: UserState;
}
