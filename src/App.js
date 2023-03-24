import logo from './logo.svg';
import './App.css';
import {Routes,Route,link} from "react-router-dom"
import SingleMovie from './pages/SingleMovie';
import Home from './pages/Home';
import Error from './Error';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='movie/:id' element={<SingleMovie/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
