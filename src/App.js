import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductsList from "./products/ProductsList";
import ProductDetails from "./products/ProductDetails";
import Cart from "./cart/Cart";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductsList} />
        <Route exact path="/product" component={ProductDetails} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
