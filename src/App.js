// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<ProductList/>} />
        <Route path="/product" component={<ProductPage/>} />
      </Routes>
    </Router>
  );
}

export default App;

