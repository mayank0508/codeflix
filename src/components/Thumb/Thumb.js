import React from 'react';
import { Link } from 'react-router-dom';
// styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable }) => (
  // we make a implicit return ie () => () here cause here we are only interested to return JSx
  <div>
    {clickable ? ( // here it says that if clickable then we should go to Link
      <Link to={`/${movieId}`}>
        {/* here it says that if clickable then we should go to movieId link */}
        <Image src={image} alt="" />
      </Link>
    ) : (
      // if not clickable then
      <Image src={image} alt="" />
      /* here the image is a prop passed in the Thumb function */
    )}
    ;
  </div>
);

export default Thumb;
