
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
import Payment from './components/Pages/Dashboard/Payment';
import AllReviews from './components/Pages/Home/UserReviews/AllReviews';
import NotFound from './components/Pages/NotFound/NotFound';
import MyProfile from './components/Pages/Dashboard/MyProfile/MyProfile';
import RequireAdmin from './components/Shared/RequireAdmin';
import ManageAllOrders from './components/Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import AddProduct from './components/Pages/Dashboard/AddProduct/AddProduct';
import ManageProducts from './components/Pages/Dashboard/ManageProducts/ManageProducts';

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
        <Route path='/allReviews' element={<RequireAuth><AllReviews /></RequireAuth>} />
        <Route path='/buy-part/:id' element={<RequireAuth><BuyParts /> </RequireAuth>} />

        <Route path='/dashboard' element={
          <RequireAuth><Dashboard /></RequireAuth>} >
          <Route path='myOrders' element={<MyOrders />} />
          <Route path='/dashboard' element={<MyProfile />} />
          <Route path='payment/:id' element={<Payment />} />
          <Route path='users' element={<RequireAdmin><Users /></RequireAdmin>} />
          <Route path='manageAllOrders' element={<RequireAdmin><ManageAllOrders /></RequireAdmin>} />
          <Route path='addAproduct' element={<RequireAdmin><AddProduct /></RequireAdmin>} />
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts /></RequireAdmin>} />
          <Route path='addItem' element={<AddItem />} />
          <Route path='feedback' element={<AddReview />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>

    </section>
  );
}

export default App;
