import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material";
import { TiDelete } from 'react-icons/ti'
import { toast } from 'react-toastify';

const Task = ({taskName, taskDateTime, index, deleteTask}) => {

  // Date-Time Format is Changed
  const dateTimeArr = taskDateTime.split('T');
  const date = dateTimeArr[0].split('-').reverse().join('.');
  const newDateTime = [date, dateTimeArr[1]].join(', ');

  const taskDeleteHandler = () => {
    deleteTask(index)
    toast.success('Congratulations!\nTask successfully completed!')
    
  }

  return (
    <StyledBox>
      <div>
      <h3>{index + 1}. {taskName}</h3>
      <p>{newDateTime}</p>
      </div>
      <TiDelete className="delete-icon" onClick={taskDeleteHandler}/>

    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  background: linear-gradient(90deg, #1c2b2d, #256f6a);
  width: 100%;
  height: 60px;
  margin: 5px;
  padding: 40px 20px;
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  

  h3 {
    color: white;
    margin-bottom: 5px;
  }

  p {
    color: white;
  }

  .delete-icon{
    width: 50px; 
    height: 50px;

    &:hover {
      color: #1C2D2E;
      transform: scale(1.3);
      transition: .30s ease-in-out;
      cursor: pointer;
    }
  }

`;

export default Task;
