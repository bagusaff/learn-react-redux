import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const balance = useSelector((state) => state.account);
  return (
    <div>
      <h1>Hello from Home</h1>
      <h1>Updated from branch 001</h1>
      <p>Balance from profile : {balance} </p>
      <h1>Updated from branch 002</h1>
    </div>
  );
};

export default Home;
