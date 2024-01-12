import React from "react";
import { Register } from "../modules/authorization";
import { Loader } from "../components/ui";

import useDelayedLoading from "../helpers/useDelayedLoading";

const RegisterPage: React.FC = () => {
  const loading = useDelayedLoading(0, 1000);

  return (
    <>
      {loading ? (
          <Loader/>
      ) : (
        <>
          <Register/>
        </>
      )}
    </>
  );
}

export default RegisterPage;