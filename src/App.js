
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Pages/Blogs/Blogs';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/Login/SignUp';
import Navbar from './components/Pages/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BuyParts from './components/Pages/BuyParts/BuyParts';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import AddItem from './components/Pages/Dashboard/AddItem';
import Users from './components/Pages/Dashboard/Users';
import RequireAuth from './components/Shared/RequireAuth'
import AddReview from './components/Pages/Dashboard/AddReview/AddReview';
import MyOrders from './components/Pages/Dashboard/MyOrders/MyOrders';

function App() {
  return (
    <section >
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/buy-part/:id' element={
        <RequireAuth>
              <BuyParts />
        </RequireAuth>
        } />


        <Route path='/dashboard' element={
          <Dashboard />} >

          <Route index path='myOrders' element={<MyOrders />} />
          {/* <Route index element={<Users />} /> */}
          <Route path='addItem' element={<AddItem />} />
          <Route path='feedback' element={<AddReview />} />
        </Route>
      </Routes>

    </section>
  );
}

export default App;
