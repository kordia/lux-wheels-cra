import React,{ Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from './components/Header'
import Home from './components/Home'
import AboutUs from './components/About_Us'
import Products from "./components/Products"
import ProductSingle from "./components/ProductSingle"
import Contacts from "./components/Contacts"
import Footer from './components/Footer'

class App extends Component {
  render() { 
    return (
      <Router>
        <Header />
            <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/about-us"  component={AboutUs} />
            <Route path="/products" component={Products} />
            <Route path="/product/:id" component={ProductSingle} />
            <Route path="/contacts" component={Contacts} />
            </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App

