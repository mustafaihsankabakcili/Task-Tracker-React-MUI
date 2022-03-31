import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material";
import Task from "../Task/Task";

const Tasks = ({datas, deleteTask}) => {
  return (
    <StyledBox>
      <h1>Tasks</h1>
        {
          datas.map((data, i) => (
            <Task taskName={data.taskName} taskDateTime={data.taskDateTime} key={i} index={i} deleteTask={deleteTask}/>
          ))
        }
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  background: linear-gradient(90deg, #1c2b2d, #256f6a);
  height: fit-content;
  width: 90%;
  margin: 10px auto;
  padding: 25px;
  border-radius: 10px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 25px;
    color: white;
  }
`;

export default Tasks;
