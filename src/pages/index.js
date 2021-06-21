import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const balance = useSelector((state) => state.account);
  return (
    <div>
      <h1>Hello from Home</h1>
      <p>Balance from profile : {balance} </p>
    </div>
  );
};

export default Home;
