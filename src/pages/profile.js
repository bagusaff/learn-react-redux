import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "../state/index";

const Profile = () => {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div>
      <h1>Hello from profile</h1>
      <Wrapper>
        <button onClick={() => depositMoney(1000)}>Deposit 1000</button>
        <p>Your Money : {account}</p>
        <button onClick={() => withdrawMoney(500)}>Withdraw 500</button>
      </Wrapper>
    </div>
  );
};

export default Profile;

const Wrapper = styled.div`
  display: grid;
  grid: auto/ auto auto auto;
  grid-gap: 10px;
  grid-auto-columns: max-content;
  max-width: 300px;
`;
