import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`   // this is where we styled the content
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  margin: 0 auto;
  max-width: var(--maxWidth);
`;

export const LogoImg = styled.img` // this is where we styled the logo 
width: 200px;

@media screen and (max-width: 500px) { // this is where we styled the logo for mobile
    width: 150px;
}
`;

export const TMDBLogoImg = styled.img` // this is where we styled the tmdb logo
width: 150px;


@media screen and (max-width: 500px) { // this is where we styled the tmdb logo for mobile
    width: 80px;
}
`;
