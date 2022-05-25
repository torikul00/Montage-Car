
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
        <Route path='/allReviews' element={<RequireAuth><AllReviews /></RequireAuth> } />
        <Route path='/buy-part/:id' element={<RequireAuth><BuyParts /> </RequireAuth>} />

        <Route path='/dashboard' element={
        <RequireAuth><Dashboard /></RequireAuth>  } >

          <Route path='/dashboard' element={<MyOrders />} />
          <Route path='payment/:id' element={<Payment />} />
          {/* <Route index element={<Users />} />
          <Route path='addItem' element={<AddItem />} /> */}
          <Route path='feedback' element={<AddReview />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>

    </section>
  );
}

export default App;
