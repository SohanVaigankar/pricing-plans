import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// page
import ConfirmOrder from "./pages/ConfirmOrder";
import OrderConfirmed from "./pages/OrderConfirmed";
import Pricing from "./pages/Pricing";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Pricing />} />
      <Route
        path="confirm-order/title=:title&price=:price&duration=:duration"
        element={<ConfirmOrder />}
      />
      <Route path="order-confirmed" element={<OrderConfirmed />} />
    </Routes>
  );
};

export default App;
