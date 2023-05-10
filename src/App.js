import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={AllProducts} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;