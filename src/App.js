import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomersDetails from './components/CustomersDetails/CustomersDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <h2>App</h2>
      <Router>
        <Header />
        <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/customer/:customerID" element={<CustomersDetails />}></Route>
        <Route element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
      </div>
  )
}

export default App