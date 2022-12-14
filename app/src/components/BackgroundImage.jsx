import backgroundImg from "../assets/background.jpg"
import {Image} from 'mui-image';

export default function BackgroundImage(props) {
  return (
    <Image
      src={backgroundImg}
      width="100%"
      height="100%"
      duration={3000}
      fit="cover"
      bgColor="grey"
      onClick={props.onClick}
    />
  );

}
