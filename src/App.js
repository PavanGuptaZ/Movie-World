import './App.css';
import { BrowserRouter } from "react-router-dom";
import { MovieWorld } from './Main_files/MovieWorld';

function App() {

  return (
    <>
      <BrowserRouter>       
        <>
          <MovieWorld/>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
