import {Route, Routes, Link} from "react-router-dom";
import Login from './pages/Login';
import Hello from './pages/Hello';
import Home from './pages/Home';
import Layout from './components/Layout';
import FoodDetails from "./pages/FoodDetails";
import Cart from "./pages/Cart";

function App() {

  return (
    <div className="container">

      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/hello/*" element={<Hello/>}></Route>
        <Route path="/second" element={<Layout><h1>This is the second part!</h1></Layout>}></Route>
        <Route path="/mylogin" element={<Login/>}></Route>
        <Route path="/food/:foodId" element={<FoodDetails/>}></Route>
        <Route path="*" element={<h1>404 No page found</h1>}></Route>
      </Routes>
    </div>
  );

}

export default App;
