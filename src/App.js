import logo from './logo.svg';
import './App.css';
import NavBar from './Pages/Shared/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home/Home'
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
      </Routes>
    </div>
  );
}

export default App;
