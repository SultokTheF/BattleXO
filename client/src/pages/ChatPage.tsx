import React from "react";
import { Chat } from "../modules/chat";
import { Loader } from "../components/ui";

import { Navbar } from "../components/layout";

import useDelayedLoading from "../hooks/useDelayedLoading";

const ChatPage: React.FC = () => {
  const loading = useDelayedLoading(0, 1000);

  return (
    <>
      {loading ? (
          <Loader/>
      ) : (
        <>
          <Navbar/>
          <Chat/>
        </>
      )}
    </>
  );
}

export default ChatPage;