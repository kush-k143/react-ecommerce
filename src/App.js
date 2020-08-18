import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Default from './components/Default';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Modal from './components/Modal'
import Cart from './components/Cart'

class App extends Component {
  render() {
    return (
       <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList}/>
            <Route path="/details" component={Details}/>
            <Route path="/cart" component={Cart}/>
            <Route component={Default}/>
          </Switch>
        <Modal />
       </React.Fragment>

    );
 
  }

}

export default App;
