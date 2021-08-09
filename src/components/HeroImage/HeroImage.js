import React from 'react';
import PropTypes from 'prop-types';

//styles
import { Wrapper, Content, Text } from './HeroImage.styles';

const HeroImage = (
  { image, title, text} 
  // check the notes in the notebook for the pre ES6 way todo it using props
  // here we are passing the props inside the object !!
) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);


HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default HeroImage;
