import {Image} from 'mui-image';

export default function WindowImage(props) {

  return (
      <Image
        src={props.src}
        width="100%"
        height="100%"
        duration={0}
        fit="contain"
        bgcolor="#429ef5"
      />
  );
}
