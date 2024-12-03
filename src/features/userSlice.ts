import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialUserState, UserState } from "@/types";

// const initialState: InitialUserState = {
//   user: null,
// };

const initialState: InitialUserState = {
  user: {
    uid: "1",
    photo: "https://picsum.photos/id/237/200/300",
    email: "test@gmail.com",
    displayName: "shun",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
