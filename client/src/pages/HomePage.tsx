import React from "react";
import { Home } from "../modules/product";
import { Loader } from "../components/ui";

import { Navbar } from "../components/layout";

import useDelayedLoading from "../helpers/useDelayedLoading";

const HomePage: React.FC = () => {
  const loading = useDelayedLoading(0, 1000);

  return (
    <>
      {loading ? (
          <Loader/>
      ) : (
        <>
          <Navbar/>
          <Home/>
        </>
      )}
    </>
  );
}

export default HomePage;