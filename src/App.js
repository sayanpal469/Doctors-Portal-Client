import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/HomeSection/Home';
import Nav from './Components/Shared/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/home' element={ <Home/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
