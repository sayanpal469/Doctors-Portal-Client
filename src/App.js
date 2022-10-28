import { Route, Routes } from 'react-router-dom';
import Appointment from './Components/Appointment/Appointment';
import Home from './Components/HomeSection/Home';
import Footer from './Components/Shared/Footer';
import Nav from './Components/Shared/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/home' element={ <Home/> }></Route>
        <Route path='/appointment' element={ <Appointment/> }></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
