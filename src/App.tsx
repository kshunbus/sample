import "./App.scss";
import Sidebar from "@/assets/component/sidebar/Sidebar";
import Chat from "@/assets/component/chat/Chat";
import Login from "@/assets/component/login/Login";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect } from "react";
import { auth } from "@/firebase";
import { login, logout } from "@/features/userSlice";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallBack } from "./utils/ErrorFallBack";

const App = () => {
  const user = useAppSelector((state) => state.user.user);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   auth.onAuthStateChanged((loginUser) => {
  //     if (loginUser) {
  //       dispatch(
  //         login({
  //           uid: loginUser.uid,
  //           photo: loginUser.photoURL,
  //           email: loginUser.email,
  //           displayName: loginUser.displayName,
  //         })
  //       );
  //     } else {
  //       dispatch(logout());
  //     }
  //   });
  // }, [dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
          <ErrorBoundary FallbackComponent={ErrorFallBack}>
            <Sidebar />
          </ErrorBoundary>

          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
