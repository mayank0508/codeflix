import React from 'react';
import { useParams } from 'react-router-dom'; // they are used to access the url arguments of a particular link
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Hooks
import { useMovieFetch } from '../hooks/useMovieFetch';
// Component
import BreadCrumb from './BreadCrumb/BreadCrumb';
import Grid from '../components/Grid/Grid';
import Spinner from '../components/Spinner/Spinner';
import MovieInfo from './MovieInfo/MovieInfo';
import MovieInfoBar from './MovieInfoBar/MovieInfoBar';
import Actor from './Actor/Actor';

// Images
import NoImage from '../images/no_image.jpg';

const Movies = () => {
  const { movieId } = useParams(); // here we are using the useParams hook to get the id of the movie from the url string and we are using the movieId because we name it as movieId in the App.js file
  const { state: movie, loading, error } = useMovieFetch(movieId); // here we are destructuring the states and moving the hooks to movieId

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong....👾</div>;
  console.log(movie)
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actor.map(actors => (
          <Actor
            key={actors.credit_id}
            name={actors.name}
            character={actors.characters}
            imageUrl={
              actors.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actors.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Movies;
