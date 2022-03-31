import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ButtonMUI from "../UI/Button/Button";
import { styled } from "@mui/material";

import { toast } from 'react-toastify';

export default function AddTask({onAddData}) {
  const [taskName, setTaskName] = useState("");
  const [taskDateTime, setTaskDateTime] = useState("2017-05-24T10:30");

  const taskNameHandler = (e) => {
    setTaskName(e.target.value);
  };

  const taskDateTimeHandler = (e) => {
    setTaskDateTime(e.target.value);
  };

  const addDataHandler = () => {
    if(taskName.length === 0){
      toast.error('Please enter a Task!');
      return;
    }

    if(taskName.length < 3){
      toast.error('Task must be at least 3 characters long!')
      return;
    }

    toast.success('Task added!');
    onAddData(taskName, taskDateTime);
    setTaskName("");
    setTaskDateTime("2017-05-24T10:30");
  };

  return (
    <StyledBox component="form" noValidate autoComplete="off">
      <StyledTextField
        id="outlined-basic"
        label="Task"
        variant="outlined"
        onChange={taskNameHandler}
        value={taskName}
      />

      <StyledDateTimePicker
        id="datetime-local"
        label="Day & Time"
        type="datetime-local"
        onChange={taskDateTimeHandler}
        sx={{ width: 400 }}
        InputLabelProps={{ shrink: true }}
        value={taskDateTime}
      />
      <ButtonMUI onClick={addDataHandler}>Add Task</ButtonMUI>
    </StyledBox>
  );
}

const StyledBox = styled(Box)`
  margin: 2.5px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  font-family: 'Kalam', cursive;

  div {
    width: 100%;
    font-family: 'Kalam', cursive;
  }

  label {
    font-family: 'Kalam', cursive;
  }
`;

const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
    & fieldset {
      border-color: white;
    }

    &:hover fieldset {
      border-color: white;
    }
  }

  & label {
    color: white;
  }

  & label.Mui-focused {
    color: white;
  }

  & input {
    color: white;
  }
`;

const StyledDateTimePicker = styled(TextField)`
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
    & fieldset {
      border-color: white;
    }

    &:hover fieldset {
      border-color: white;
    }
  }

  & label {
    color: white;
  }

  & label.Mui-focused {
    color: white;
  }

  & input {
    color: white;
  }
`;
