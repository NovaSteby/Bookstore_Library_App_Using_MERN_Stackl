import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import AllBooks from "./pages/AllBooks";
import SignUp from "./pages/SignUp";
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import RecentlyAdded from './components/Home/RecentlyAdded';
import ViewBookDetails from './components/ViewBookDetails/ViewBookDetails';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/auth';
import Favourites from './components/Profile/Favourites';
import UserRentHistory from './components/Profile/UserRentHistory';
import Settings from './components/Profile/Settings';
import AllRents from './pages/AllRents';
import AddBook from './pages/AddBook';
import UpdateBook from './pages/UpdateBook';


const App = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  useEffect(() => {
    if (
      localStorage.getItem("id") &&
      localStorage.getItem("token") &&
      localStorage.getItem("role") 
    ) {
      dispatch(authActions.login());
      dispatch(authActions.changeRole(localStorage.getItem("role")));
    }
  },[]);

  return (
    <div>
    
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route  path="/all-books" element={<AllBooks />} />
            <Route  path="/SignUp" element={<SignUp />} />
            <Route  path="/Login" element={<Login />} />
            <Route  path="/updateBook/:id" element={<UpdateBook />} />
            <Route  path="/cart" element={<Cart />} />
            <Route  path="/profile" element={<Profile />} >
              {role === "user" ? <Route index element={<Favourites />} /> : <Route index element={< AllRents/>}/>}
              {role === "admin" && <Route path="/profile/add-book" element={<AddBook />}/>}
              <Route path="/profile/rentHistory" element={<UserRentHistory />} />
              <Route path="/profile/settings" element={<Settings />} />
            </Route>   
            <Route path="view-book-details/:id" element={<ViewBookDetails />} />
          </Routes>
          <Footer />
     
     
      
     

    </div>
  )
}

export default App
