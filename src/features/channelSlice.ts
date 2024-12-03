import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChannelState } from "@/types";

const initialState: ChannelState = {
  channelId: "8hcVTR35u5UjrWT0Rqwi",
  channelName: "TypeScript",
};

const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    setChannelInfo: (state, action: PayloadAction<ChannelState>) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { setChannelInfo } = channelSlice.actions;
export default channelSlice.reducer;
