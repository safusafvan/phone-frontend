import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Home from './Home';
import Signup from './Navpage/Signup';
import Login from './Navpage/Login';
import Navbar from './component/Navbar';
// import SideBar from './component/Sidebar';
import Home from './Pages/Home';
import Mainpage from './Pages/Mainpage';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { CartProvider } from 'react-use-cart';
import Logot from './Navpage/Logot';
import Landingpage from './Pages/Landingpage';
import Order from './Pages/Order';
import Phone from './Pages/Phone';
import AdminSignup from './Adminpage/AdminSignup';
import Adminhome from './Adminpage/Adminhome';
import CoustomerDetail from './Pages/CoustomerDetail';
import AdminNavbar from './Adminpage/AdminNavbar';
import AdminLogin from './Adminpage/AdminLogin';
import Userdata from './Adminpage/Userdata';
import UserDetails from './Adminpage/UserDetails';
import Addphone from './Adminpage/Addphone';
import Phoneview from './Pages/Phoneview';
import Adminedit from './Adminpage/Adminedit';


function App() {
  return (
    <div className="App">
      <>
      <CartProvider>
     <Routes>
     <Route path='/' element={<Landingpage/>} />
     <Route path='/home' element={<Home/>} />
        {/* <Route path='/sidebar' element={<SideBar />} /> */}
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logot' element={<Logot />} />
        <Route path='/order' element={<Order/>} />
        <Route path='/phone' element={<Phone/>} />

        {/* <Route path='/admin' element={<AdminSignup/>} /> */}

        <Route path='/adminhome' element={<Adminhome/>} />
        <Route path='/details' element={<CoustomerDetail/>} />
        <Route path='/admin' element={<AdminNavbar/>} />
        <Route path='/adminsignup' element={<AdminSignup/>} />
        <Route path='/adminlogin' element={<AdminLogin/>} />
        <Route path='/logdetails' element={<Userdata/>} />
        <Route path='/customerdetails' element={<UserDetails/>} />
        <Route path='/addphone' element={<Addphone/>} />
        <Route path='/phoneview' element={<Phoneview/>} />
        <Route path='/edit' element={<Adminedit/>} />
        {/* <Route path='/' element={<Mainpage/>} /> */}
        {/* <Route path='/' element={<Mainpage/>} /> */}
      
           {/* <Route path='/' element={<Navbar/>} /> */}
        {/* <Route path='/logot' element={<Logot />} /> */}
      </Routes>
      </CartProvider>
      </>
    </div>
  );
}

export default App;
