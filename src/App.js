import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Products from './Components/Products';
import './css/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/about">
            <h3>About page</h3>
          </Route>
          <Route path="/contact">
            <h3>Contact page 📱 </h3>
          </Route>
          <Route path="/cart">
            <h3>Cart page ✈  </h3>
          </Route>
          <Route path="/">
            <Home />
            {/* <Products /> */}
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
