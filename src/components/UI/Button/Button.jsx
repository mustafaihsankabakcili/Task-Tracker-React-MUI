import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';


const ButtonMUI = (props) => {


  return (
      <StyledButton variant="contained" onClick={props.onClick}>{props.children}</StyledButton>
  );
}

const StyledButton = styled(Button)`
  margin: auto;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  background : linear-gradient(90deg, #1c2b2d, #256f6a);
  border: 1px solid white;
  font-family: 'Kalam', cursive;
`;


export default ButtonMUI;