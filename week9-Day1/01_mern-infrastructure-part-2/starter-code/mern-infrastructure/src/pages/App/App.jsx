import { useState } from "react";
import NewOrderPage from "./NewOrderPage/NewOrderPage";
import AuthPage from "./AuthPage/AuthPage";
import OrderHistoryPage from "./OrderHistoryPage/OrderHistoryPage";
import NavBar from "../components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";

import "./App.css";
function App() {
  const [user, setUser] = useState({});
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders/" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}

export default App;
