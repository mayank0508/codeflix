import React from 'react';
import { GlobalStyle } from './GlobalStyle'; // these are the styles that will be rendered

// const Star = () => React.createElement('div', null, 'This is a little star'); // this is a alternate to JSX

const App = () => {
  return (
    <div className="App">
      Start here.
      <GlobalStyle />      {/* // this is how we declare the global style in the document */}
    </div>
  );
};

export default App;
