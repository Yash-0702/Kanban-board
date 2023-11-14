import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Main from "./Main";
import Navbar from "./Navbar";

const Container = styled.div`
  margin-left: 20px;
  border: 1px solid #989191;
  border-radius: 10px;
  width: 390px;
  position: absolute;
  z-index: 99;
  background-color: white;
  @media only screen and (max-width: 413px) {
    width: 290px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 10px;
`;

const Grouping = styled.span`
  margin: 8px;
  font-weight: 500;
  color: #989191;
`;

const Ordering = styled.span`
  margin: 8px;
  font-weight: 500;
  color: #989191;
`;

const GroupSelect = styled.select`
  padding: 5px;
  width: 140px;
  border-radius: 5px;
  margin-left: 120px;
  font-size: 15px;
  @media only screen and (max-width: 413px) {
    margin-left: 40px;
  }
`;

const GroupOptions = styled.option``;

const OrderSelect = styled.select`
  padding: 5px;
  width: 140px;
  border-radius: 5px;
  margin-left: 120px;
  font-size: 15px;
  @media only screen and (max-width: 413px) {
    margin-left: 40px;
  }
`;

const OrderOptions = styled.option``;

const Select = () => {
  const [Selectvalue, setSelectvalue] = useState({
    Grouping:
      JSON.parse(localStorage.getItem("kanbanViewState"))?.Grouping || "status",
    Ordering:
      JSON.parse(localStorage.getItem("kanbanViewState"))?.Ordering ||
      "priority",
  });

  //save state in local storage

  const saveViewState = () => {
    localStorage.setItem("kanbanViewState", JSON.stringify(Selectvalue));
  };

  const handleChange = (value, type) => {
    setSelectvalue({ ...Selectvalue, [type]: value });
    saveViewState();
  };

  useEffect(() => {
    saveViewState();
  });

  // console.log(Selectvalue);

  return (
    <>
      <Container>
        <Wrapper>
          <Grouping>Grouping</Grouping>
          <GroupSelect
            value={Selectvalue.Grouping}
            onChange={(e) => handleChange(e.target.value, "Grouping")}
          >
            <GroupOptions value={"status"}>Status</GroupOptions>
            <GroupOptions value={"user"}>User</GroupOptions>
            <GroupOptions value={"priority"}>Priority</GroupOptions>
          </GroupSelect>
        </Wrapper>

        <Wrapper>
          <Ordering>Ordering</Ordering>
          <OrderSelect
            value={Selectvalue.Ordering}
            onChange={(e) => handleChange(e.target.value, "Ordering")}
          >
            <OrderOptions value={"priority"}>Priority</OrderOptions>
            <OrderOptions value={"title"}>Title</OrderOptions>
          </OrderSelect>
        </Wrapper>
      </Container>
    </>
  );
};

export default Select;
