import React, { useState } from "react";
import styled from "styled-components";
import Slider from "../icons/Slider.svg";
import ArrowDown from "../icons/arrowDown.svg";
import Select from "./Select";
import Main from "./Main";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #white;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 20px;
  padding: 5px;
  font-size: 18px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
`;

const Display = styled.span`
  margin: 0px 8px;
  font-weight: 500;
  font-size: 18px;
`;

const Icons = styled.img`
  width: 20px;
  height: 20px;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Icons src={Slider} />
          <Display>Display</Display>

          <Icons
            src={ArrowDown}
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          />
        </Wrapper>
      </Container>
      {open && <Select />}
    </>
  );
};

export default Navbar;
