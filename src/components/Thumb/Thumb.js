import React from 'react';

// styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable }) => (
  // we make a implicit return ie () => () here cause here we are only interested to return JSx
  <div>
    <Image src={image} alt="" />  {/* here the image is a prop passed in the Thumb function */}
  </div>
);

export default Thumb;
