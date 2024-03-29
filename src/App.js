import './App.css';
import NavBar from './Pages/Shared/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home/Home'
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import Register from './Register/Register';
import RequireAuth from './RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './RequireAdmin/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctor from './Pages/Dashboard/ManageDoctor';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/appointment' element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequireAdmin>
            <Users></Users>
          </RequireAdmin>}></Route>
          <Route path='adddoctor' element={<RequireAdmin>
            <AddDoctor></AddDoctor>
          </RequireAdmin>}></Route>
          <Route path='managedoctor' element={<RequireAdmin>
            <ManageDoctor></ManageDoctor>
          </RequireAdmin>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
