import React from 'react';

// styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable }) => (
  // we make a implicit return ie () => () here cause here we are only interested to return JSx
  <div>
    <Image src={image} alt="movie-thumbnail" />
  </div>
);

export default Thumb;
