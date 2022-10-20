import logo from './logo.svg';
import './App.css';
import Image from 'react-fit-image';

function App() {
  return (
    <div className="App">
      <div>
        {process.env.PUBLIC_URL}
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      <img src={process.env.PUBLIC_URL + "/logo192.png"} />
      <Image
        imgProps={{
          src: "./logo.svg",
          alt: "profile",
          title: "profile"
        }}
        width="300px"
        height="200px"
        borderRadius="10%"
      />
    </div>
  );
}

export default App;png
