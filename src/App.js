
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import AddItems from './components/AddItems/AddItems';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import ManageInventories from './components/ManageInventories/ManageInventories';
import ManageItem from './components/ManageItem/ManageItem';
import MyItems from './components/MyItems/MyItems';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div className='h-100'>
<Header></Header>
<Toaster/>
<Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/home' element={<Home></Home>}></Route>
<Route path='/manage' element={<RequireAuth><ManageInventories></ManageInventories></RequireAuth>}></Route>
<Route path='/add' element={<RequireAuth><AddItems></AddItems></RequireAuth>}></Route>
<Route path='/manageitem/:id' element={<RequireAuth><ManageItem></ManageItem></RequireAuth>}></Route>
<Route path='/myitem' element={<MyItems></MyItems>}></Route>
<Route path='/blogs' element={<Blogs></Blogs>}></Route>
<Route path='/login' element={<Login></Login>}></Route>
<Route path='/register' element={<Register></Register>}></Route>
<Route path='/about' element={<AboutUs></AboutUs>}></Route>
<Route path='*' element={<NotFound></NotFound>}></Route>
</Routes>
<Footer></Footer>
    </div>
  );
}

export default App;
