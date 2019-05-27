import React from "react";
import CreateCourse from "../components/CreateCourse";
import SignInFirst from "../components/SignInFirst";

import Head from "next/head";

const AddPage = () => {
  return (
    <>
      <Head>
        <title>CoffeeGlot | Add a Course</title>
      </Head>
      <SignInFirst>
        <CreateCourse />
      </SignInFirst>
    </>
  );
};

export default AddPage;
