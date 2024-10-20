import Chat from "./components/chat/Chat.jsx";
import Detail from "./components/detail/Detail.jsx";
import List from "./components/list/List.jsx";
import Notification from "./components/notification/Notification.jsx";
import Login from "./components/login/login.jsx";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase.js";

function App() {
  const user = false;

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
    return () => {
      unSub();
    }
  });

  return (
      <div className='container'>
          {
            user ? (
              <>
                <List />
                <Chat />
                <Detail />
              </>
            ) : (
              <Login />
            )
          }
          <Notification />
      </div>
  );
}

export default App
