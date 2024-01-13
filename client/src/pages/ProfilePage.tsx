import React from "react";
import { Profile } from "../modules/user";
import { Loader } from "../components/ui";

import { Navbar } from "../components/layout";

import useDelayedLoading from "../services/useDelayedLoading";

const ProfilePage: React.FC = () => {
  const loading = useDelayedLoading(0, 1000);

  return (
    <>
      {loading ? (
          <Loader/>
      ) : (
        <>
          <Navbar/>
          <Profile/>
        </>
      )}
    </>
  );
}

export default ProfilePage;