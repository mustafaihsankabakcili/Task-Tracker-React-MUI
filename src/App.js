import React, { useState } from "react";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [data, setData] = useState([]);

  const addDataHandler = (tName, tDateTime) => {
    setData([{ taskName: tName, taskDateTime: tDateTime }, ...data]);
  };

  const deleteTaskHandler = (deletedTaskId) => {
      setData(data.filter((item, index) => (index !== deletedTaskId) && item));
  }

  return (
    <StyledBox>
      <ToastContainer />
      <Header onAddData={addDataHandler} />
      {data.length > 0 ? <Tasks datas={data} deleteTask={deleteTaskHandler}/> : 
      <h1>No Task to Show !</h1>}
    </StyledBox>
  );
}

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  padding: 1px;
  width: 500px;
  background: linear-gradient(90deg, #1c2b2d, #256f6a);
  border-radius: 15px;
  border: 1px solid white;

  h1 {
    margin: 25px;
    color: white;
  }

`;
