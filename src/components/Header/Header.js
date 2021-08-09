import React from 'react';

//Component
import { Link } from 'react-router-dom';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

// Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => (
  <Wrapper>
    {' '}
    {/* here the work of the wrapper is to just create a card */}
    <Content>
      {/* here the work of the content is to make a place where we can add logos */}
      <Link to="/">
        {' '}
        {/* here the link to helps us in making the react movie logo a kind of link which traces us back to the home page*/}
        <LogoImg src={RMDBLogo} alt="rmdb-logo" />{' '}
        {/* here we actually we declare the main logo */}
      </Link>{' '}
      <TMDBLogoImg src={TMDBLogo} alt="tmdb_logo" />{' '}
      {/* here we actually we declare the tmdb logo */}
    </Content>
  </Wrapper>
);

export default Header;
