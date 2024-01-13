import React from "react";
import { Game } from "../modules/games";
import { Loader } from "../components/ui";

import { Navbar } from "../components/layout";

import useDelayedLoading from "../services/useDelayedLoading";

const GamePage: React.FC = () => {
  const loading = useDelayedLoading(0, 1000);

  return (
    <>
      {loading ? (
          <Loader/>
      ) : (
        <>
          <Navbar/>
          <Game/>
        </>
      )}
    </>
  );
}

export default GamePage;