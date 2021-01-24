import React from "react";
import Layout from "../components/layout";
import { Products, Cart } from "../components/pages/home";

const Home = () => {
  return (
    <Layout>
      <Products />
      <Cart />
    </Layout>
  );
};

export default Home;
