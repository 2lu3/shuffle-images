import './App.css';
import React from "react";
import {useCallback, useState, useRef, useEffect} from "react";
import {Box, Grid, Button} from "@mui/material";
import WindowImage from "./components/WindowImage.jsx"

import img11 from "./assets/1/1.jpg"
import img12 from "./assets/1/2.jpg"
import img13 from "./assets/1/3.jpg"
import img14 from "./assets/1/4.jpg"
import img15 from "./assets/1/5.jpg"
import img16 from "./assets/1/6.jpg"

import img21 from "./assets/2/1.jpg"
import img22 from "./assets/2/2.jpg"
import img23 from "./assets/2/3.jpg"
import img24 from "./assets/2/4.jpg"
import img25 from "./assets/2/5.jpg"
import img26 from "./assets/2/6.jpg"
import img27 from "./assets/2/7.jpg"

import img31 from "./assets/3/1.jpg"
import img32 from "./assets/3/2.jpg"
import img33 from "./assets/3/3.jpg"
import img34 from "./assets/3/4.jpg"
import img35 from "./assets/3/5.jpg"
import img36 from "./assets/3/6.jpg"
import img37 from "./assets/3/7.jpg"


const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

//const Memorized = React.memo(BackgroundImage);

function App() {
  const imageArray1 = [
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
  ];
  const imageArray2 = [
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
  ];
  const imageArray3 = [
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
  ];
  // const imageArray = [
  //   "https://picsum.photos/1200/1600",
  //   "https://picsum.photos/1200/1600",
  //   "https://picsum.photos/1200/1600"
  // ];
  //const imageArray = Array.from(imageArray2, src => <WindowImage src={src} />);
  const [imageIndex, setImageIndex] = useState(0);
  const [imageArray, setImageArray] = useState(imageArray1);
  const [focused, setFocused] = useState(0);
  const intervalTime = useRef(1);
  const isShuffling = useRef(false);

  const intervalRef = useRef(null);

  const shuffle = () => {
    intervalRef.current = setTimeout(async () => {
      setImageIndex(getRandomInt(imageArray.length));
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

  useEffect(() => {
    if (focused === 0) {
      setImageArray(imageArray1);
    }
    else if (focused === 1) {
      setImageArray(imageArray2);
    }
    else if (focused === 2) {
      setImageArray(imageArray3);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focused]);

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
        height: "100%",
      }}
    >
      <Box
        onClick={handleOnClick}
        sx={{
          bgcolor: "#ccebff",
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: "0%",
          left: "0%"
        }}>
        <WindowImage src={imageArray[imageIndex]} />
      </Box>
      <Grid container alignItems='center' spacing={10}>
        <Grid item>
          <Button
            onClick={() => {setFocused(0)}} variant='contained'>
            1
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => setFocused(1)} variant='contained'>
            2
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => setFocused(2)} variant='contained'>
            3
          </Button>
        </Grid>
      </Grid>

    </Box>
  );
}

export default App;
