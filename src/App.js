import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Chart from './components/Chart/Chart';
import Filters from './components/Filters/Filters';
import Footer from './components/Footer/Footer';

const App = (props) => {
  return (
    <BrowserRouter>
      <span class="wrapper">
        <div className='main-head'>
          <Header />
        </div>

        <nav class="main-nav">
          <Navbar />
        </nav>

        <article class="content">
          <Route path='/'
            render={() => {
              return <Chart
                options={props.state.chartOptions}
                dispatch={props.dispatch} />
            }} />
        </article>

        <aside class="side">
          <Route path='/'
            render={() => {
              return <Filters
                options={props.state.chartOptions}
                dispatch={props.dispatch} />
            }} />
        </aside>

        <footer class="main-footer">
          <Footer />
        </footer>
      </span>
    </BrowserRouter>
  );
}

export default App;