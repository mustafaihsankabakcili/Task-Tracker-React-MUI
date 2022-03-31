import React, { useState } from "react";
import Box from "@mui/material/Box";
import ButtonMUI from "../UI/Button/Button";
import AddTask from "../AddTask/AddTask";
import { styled } from "@mui/material";

import { toast } from 'react-toastify';

const Header = ({onAddData}) => {
  const [show, setShow] = useState(true);

  const showHandler = () => {
    setShow(!show);
    show ? toast.warning('Add Task Bar Closed!') : toast.warning('Add Task Bar Opened!');
  };

  return (
    <StyledBox>
      <h1>Task Tracker</h1>
      <ButtonMUI onClick={showHandler}>
        {show ? "Close Add Task Bar" : "Show Add Task Bar"}
      </ButtonMUI>

      {show && <AddTask onAddData={onAddData} />}
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  margin: 25px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 25px;
  width: 90%;

  h1 {
    color: white;
  }
`;

export default Header;
