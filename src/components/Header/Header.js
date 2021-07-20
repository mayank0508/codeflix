import React from 'react';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import { Wrapper, Content, LogoImg, TMDBLogoImg} from './Header.styles';


const Header = () => (
<Wrapper>  {/* here the work of the wrapper is to just create a card */}
  <Content> {/* here the work of the content is to make a place where we can add logos */}
    <LogoImg src={RMDBLogo} alt="rmdb-logo"/>  {/* here we actually we declare the main logo */}
    <TMDBLogoImg src={TMDBLogo} alt="tmdb_logo" />  {/* here we actually we declare the tmdb logo */}
    </Content>
</Wrapper>
);

export default Header;