import {Image} from 'mui-image';

export default function WindowImage(props) {

  return (
      <Image
        src={props.url}
        width="100%"
        height="100%"
        duration={0}
        fit="cover"
        bgColor="grey"
      />
  );
}
