import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import Delivery from "./containers/Delivery/Delivery";
import Catalog from "./containers/Catalog/Catalog";
import About from "./containers/About/About";
import Payment from "./containers/Payment/Payment";
import StocksCatalog from "./containers/StocksCatalog/StocksCatalog";
import Contact from "./containers/Contact/Contact";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="page-wrap">
      <Layout>
        <Switch>
          <Route path='/' exact render={() => <Home/>}/>
          <Route path='/catalog' render={() => <Catalog/>}/>
          <Route path='/about' render={() => <About/>}/>
          <Route path='/delivery' render={() => <Delivery/>}/>
          <Route path='/payment' render={() => <Payment/>}/>
          <Route path='/stock' render={() => <StocksCatalog/>}/>
          <Route path='/contact' render={() => <Contact/>}/>
          <Route render={() => <ErrorPage/>}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
