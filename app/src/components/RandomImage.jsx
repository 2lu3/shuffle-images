import {useEffect, useState} from "react";
import useSWR from "swr";
import WindowImage from "./WindowImage";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

export default function RandomImage(props) {
  const imageArray = Array.from(props.imageUrlArray, url => new Image());
  const [image, setImage] = useState();

  useEffect(() => {
    console.log("effect called");
    rollDice();
  }, []);


  const rollDice = () => {
    console.log(imageArray[0]);
    setImage(imageArray[0]);
    //setImage(imageArray[getRandomInt(imageArray.length)]);
    console.log("rollDice");
  }

  return (<div>
    {image}
  </div>);
}
