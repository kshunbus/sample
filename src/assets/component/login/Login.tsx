import React, { memo } from "react";
import "./Login.scss";
import { Button } from "@mui/material";
import { useAppDispatch } from "@/app/hooks";
import { login } from "@/features/userSlice";
// import { signIn } from "@/firebase";

const Login = () => {
  const dispatch = useAppDispatch();

  const handleSignIn = () => {
    dispatch(
      login({
        uid: "10004",
        photo: "https://picsum.photos/id/237/200/300",
        email: "test@gmail.com",
        displayName: "shun",
      })
    );
  };

  return (
    <div className="login">
      <div className="loginLogo">
        <img src="./discordIcon.png" alt="" />
      </div>

      <Button onClick={handleSignIn}>ログイン</Button>
    </div>
  );
};

export default memo(Login);
