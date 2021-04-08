import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ChartPage from './components/ChartPage/ChartPage';

const App = () => {
  return (
    <BrowserRouter>
      <span className="wrapper">
        <div className='main-head'>
          <Header />
        </div>

        <nav className="main-nav">
          <Navbar />
        </nav>

        <Route path='/:page' render={() => { return <ChartPage /> }} />

        <footer className="main-footer">
          <Footer />
        </footer>
      </span>
    </BrowserRouter>
  );
}

export default App;