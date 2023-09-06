// import logo from "../../logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
import SeedNavBar from "../../components/SeedNavBar";
import Products from "../Products/Products";
import About from "../About/About";
import Home from "../Home/Home";

function App() {
  return (
    <>
      <SeedNavBar />
      <Routes>
        {/* Route components in here */}
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
export default App;
