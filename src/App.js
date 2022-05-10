
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import AddItems from './components/AddItems/AddItems';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import ManageInventories from './components/ManageInventories/ManageInventories';
import ManageItem from './components/ManageItem/ManageItem';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';

function App() {
  return (
    <div className='h-100'>
<Header></Header>
<Toaster/>
<Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/home' element={<Home></Home>}></Route>
<Route path='/manage' element={<ManageInventories></ManageInventories>}></Route>
<Route path='/add' element={<AddItems></AddItems>}></Route>
<Route path='/manageitem/:id' element={<ManageItem></ManageItem>}></Route>
<Route path='/blogs' element={<Blogs></Blogs>}></Route>
<Route path='/login' element={<Login></Login>}></Route>
<Route path='/register' element={<Register></Register>}></Route>
<Route path='*' element={<NotFound></NotFound>}></Route>
</Routes>
<Footer></Footer>
    </div>
  );
}

export default App;
