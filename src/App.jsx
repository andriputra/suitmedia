import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import './assets/style/generalStyle.scss';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
