import React from "react";
import { Authorization } from "../modules/authorization";
import { Loader } from "../components/ui";

import useDelayedLoading from "../hooks/useDelayedLoading";

const AuthorizationPage: React.FC = () => {
  const loading = useDelayedLoading(0, 1000);

  return (
    <>
      {loading ? (
          <Loader/>
      ) : (
        <>
          <Authorization/>
        </>
      )}
    </>
  );
}

export default AuthorizationPage;