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

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
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
        <Route path="/productDetails/:productId" element={
          <RequireAuth>
            <ProductDetails></ProductDetails>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
