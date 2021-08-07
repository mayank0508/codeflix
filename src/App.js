import React from 'react';

// Rounting
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Styles
import { GlobalStyle } from './GlobalStyle'; // these are the styles that will be rendered

// Component: Header
import Header from './components/Header/Header'; // this file was made in the header file for the header section
import Home from './components/Home';
import Movies from './components/Movies';
import NotFound from './components/NotFound';

// const Star = () => React.createElement('div', null, 'This is a little star'); // this is a alternate to JSX

const App = () => (
  <Router>
    {' '}
    {/* Here you will define your routes and controllers */}
    <Header /> {/* here we declare the components in the JSX file */}
    <Routes>
      <Route path="/" element={<Home />} />{' '}
      {/* here we declare the Home page in the given path */}
      <Route path="/:movieId" element={<Movies />} />{' '}
      {/* here we declare the the Movie page in the given path */}
      <Route path="/*" element={<NotFound />} />{' '}
      {/* here we declare the NotFound page in the given path using the "/*" */}
    </Routes>
    <GlobalStyle />{' '}
    {/* // this is how we declare the global style in the document */}
  </Router>
);

export default App;
