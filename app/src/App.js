import './App.css';
import React from "react";
import {useCallback, useState, useRef} from "react";
import {Box} from "@mui/material";
import BackgroundImage from "./components/BackgroundImage.jsx"
import WindowImage from "./components/WindowImage.jsx"
import RandomImage from "./components/RandomImage.jsx"

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const Memorized = React.memo(BackgroundImage);

function App() {
  const imageUrlArray = [
    "https://picsum.photos/1200/1600",
    "https://picsum.photos/1000/1600",
    "https://picsum.photos/1100/1600"];
  const imageArray = Array.from(imageUrlArray, url => <WindowImage url={url}/>);
  const [image, setImage] = useState(imageArray[0]);

  const intervalRef = useRef(null);

  const handleOnClick = useCallback(() => {
    if (intervalRef.current == null) {
      intervalRef.current = setInterval(() => {
        setImage(imageArray[getRandomInt(imageArray.length)]);
        console.log("update");
      }, 1000);
      console.log("start update");
    }
    else {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      console.log("stop update");
    }
  }, []);
  // <WindowImage url="https://picsum.photos/1200/1600"/>
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
      }}>
      <Memorized onClick={handleOnClick} />
      <Box sx={{
        width: "20%",
        height: "80%",
        position: "absolute",
        top: "10%",
        left: "10%"
      }}>
        {image}
      </Box >
    </Box>
  );
}

export default App;
