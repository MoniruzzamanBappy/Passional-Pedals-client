import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from './components/Signup/Signup';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import AddItem from './components/AddItem/AddItem';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ProductDetails from './components/ProductDetails/ProductDetails';
import AllProducts from "./components/AllProducts/AllProducts";
import MyItems from "./components/MyItems/MyItems";
import Blogs from "./components/Blogs/Blogs";
import AboutMe from "./components/AboutMe/AboutMe";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/aboutMe" element={<AboutMe></AboutMe>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/manageInventory" element={
          <RequireAuth>
            <AllProducts></AllProducts>
          </RequireAuth>
        }></Route>
        <Route path="/myItems" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path="/addItem" element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path="/inventory/:productId" element={
          <RequireAuth>
            <ProductDetails></ProductDetails>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
