import './App.css';
import {Box} from "@mui/material";
import BackgroundImage from "./pages/BackgroundImage.jsx"

function App() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
      }}>
      <BackgroundImage />
    </Box>
  );
}

export default App;
