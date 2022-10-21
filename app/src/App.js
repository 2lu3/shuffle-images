import './App.css';
import React from "react";
import {useCallback, useState, useRef} from "react";
import {Box} from "@mui/material";
import WindowImage from "./components/WindowImage.jsx"
import srcIamge1 from "./assets/1.jpg";
import srcIamge2 from "./assets/2.jpg";
import srcIamge3 from "./assets/3.jpg";
import srcIamge4 from "./assets/4.jpg";
import srcIamge5 from "./assets/5.jpg";
import srcIamge6 from "./assets/6.jpg";
import srcIamge7 from "./assets/7.jpg";
import srcIamge8 from "./assets/8.jpg";
import srcIamge9 from "./assets/9.jpg";


const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

//const Memorized = React.memo(BackgroundImage);

function App() {
  const imageUrlArray2 = [
    srcIamge1,
    srcIamge2,
    srcIamge3,
    srcIamge4,
    srcIamge5,
    srcIamge6,
    srcIamge7,
    srcIamge8,
    srcIamge9,
  ];
  // const imageUrlArray = [
  //   "https://picsum.photos/1200/1600",
  //   "https://picsum.photos/1200/1600",
  //   "https://picsum.photos/1200/1600"
  // ];
  //const imageArray = Array.from(imageUrlArray2, src => <WindowImage src={src} />);
  const imageArray = Array.from(imageUrlArray2, src => src);
  const [image, setImage] = useState(imageArray[0]);
  const intervalTime = useRef(1);
  const isShuffling = useRef(false);
  //const [isFocused, setIsFocused] = useState(true);

  const intervalRef = useRef(null);

  const shuffle = () => {
    intervalRef.current = setTimeout(async () => {
      setImage(imageArray[getRandomInt(imageArray.length)]);
      if (intervalTime.current >= 500) {
        console.log("stop");
        clearTimeout(intervalRef.current);
        intervalRef.current = null;
      }
      else {
        shuffle();
      }
      if (!isShuffling.current) {
        intervalTime.current *= 1.2;
      }
    }, intervalTime.current);
  }

  const handleOnClick = useCallback(() => {
    if (intervalRef.current == null) {
      console.log("shuffle start");
      isShuffling.current = true;
      intervalTime.current = 1;
      shuffle();
    }
    else {
      isShuffling.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // <WindowImage url="https://picsum.photos/1200/1600"/>
  //<WindowImage src={image} />
  // <Memorized onClick={handleOnClick} />

  //{
  //        isFocused && <Box sx={{
  //          width: "100%",
  //          height: "100%",
  //          position: "absolute",
  //          top: "0%",
  //          left: "0%"
  //        }}>
  //          <WindowImage src={image} />
  //        </Box >
  //      }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: "#429ef5"
      }}
      onClick={handleOnClick}
    >

      {

        <Box sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0%",
          left: "0%"
        }}>
          <WindowImage src={image} />
        </Box >
      }
    </Box>
  );
}

export default App;
