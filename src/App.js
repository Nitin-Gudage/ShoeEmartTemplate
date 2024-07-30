
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Home from './Components/Home';
import { Container } from '@mui/material';
import NavBar from './Components/NavBar';


function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
