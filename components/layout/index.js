import React from "react";
import Head from "next/head";
import Aside from "./Aside";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>Case</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Aside />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
