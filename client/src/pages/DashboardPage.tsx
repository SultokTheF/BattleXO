import React from "react";
import { Dashboard } from "../modules/dashboard";
import { Loader } from "../components/ui";

import useDelayedLoading from "../helpers/useDelayedLoading";

const DashboardPage: React.FC = () => {
  const loading = useDelayedLoading(0, 1000);

  return (
    <>
      {loading ? (
          <Loader/>
      ) : (
        <>
          <Dashboard/>
        </>
      )}
    </>
  );
}

export default DashboardPage;