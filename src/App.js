import React from 'react';
import { GlobalStyle } from './GlobalStyle'; // these are the styles that will be rendered

// Component: Header
import Header from './components/Header/Header'; // this file was made in the header file for the header section

// const Star = () => React.createElement('div', null, 'This is a little star'); // this is a alternate to JSX

const App = () => {
  return (
    <div className="App">
      <Header /> {/* here we declare the components in the JSX file */}
      <GlobalStyle />{' '}
      {/* // this is how we declare the global style in the document */}
    </div>
  );
};

export default App;
