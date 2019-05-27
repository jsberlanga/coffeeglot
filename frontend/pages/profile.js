import React from "react";
import Profile from "../components/Profile";
import SignInFirst from "../components/SignInFirst";

import Head from "next/head";

const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>CoffeeGlot | Profile</title>
      </Head>
      <SignInFirst>
        <Profile />
      </SignInFirst>
    </>
  );
};

export default ProfilePage;
