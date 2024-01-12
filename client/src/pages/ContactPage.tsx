import React from "react";
import { Contact } from "../modules/contact";
import { Loader } from "../components/ui";

import useDelayedLoading from "../helpers/useDelayedLoading";

const ContactPage: React.FC = () => {
  const loading = useDelayedLoading(0, 1000);

  return (
    <>
      {loading ? (
          <Loader/>
      ) : (
        <>
          <Contact/>
        </>
      )}
    </>
  );
}

export default ContactPage;