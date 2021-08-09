import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'; // it will help us to link back to the home page
// Styles
import { Wrapper, Content } from './BreadCrumb.styles';

const BreadCrumb = ({ movieTitle }) => (
  // here movieTitle is a prop declare using the destructuring method
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home 🏠</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

BreadCrumb.propTypes = {
  movieTitle: PropTypes.string
};

export default BreadCrumb; // we will be exporting it to the Movies.js
