import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Content, Text } from './MovieInfo.styles';
//Component
import Thumb from '../Thumb/Thumb';
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// Image
import NoImage from '../../images/no_image.jpg';

const MovieInfo = ({ movie }) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
      <Thumb
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
        }
        clickable={false}
      />
      <Text>
        <h1>{movie.title}</h1>
        <h3>PLOT</h3>
        <p>{movie.overview}</p>

        <div className="rating-directors">
          <div>
            <h3>RATING</h3>
            <div className="score">{movie.vote_average}</div>
          </div>
          <div className="director">
            <h3>Director{movie.directors.length > 1 ? 's' : ''}</h3>
            {/* This was done so that if there are more than one director, then add s to the end of the list "SMART MOVE"*/}
            {movie.directors.map(director => (
              <p key={director.credit_id}>{director.name}</p>
            ))}
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
);

MovieInfo.propTypes = {
  movie: PropTypes.object, // here movies is an object
}


export default MovieInfo; // this will be exported to Movies.js
