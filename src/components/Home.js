import React from 'react';
//API {it was already there declare so i didnt have to worry about it 😎}

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'; // these are the default congiuration values

//Component
import HeroImage from './HeroImage/HeroImage';
import Grid from './Grid/Grid';
import Thumb from './Thumb/Thumb';
import Spinner from './Spinner/Spinner';
import SearchBar from './SearchBar/SearchBar';

//hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

//Images
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm} = useHomeFetch();
  console.log(state);

  return (
    // here <> is called a fragment it is used when we dont want to use the divs inside the components
    // here inside the fragment we can see that there is ternay operator there that says that if the
    // state.result's first element exists then render the props bellow else return null.
    <>
      <SearchBar 
      setSearchTerm={setSearchTerm}
      />

      {!searchTerm && state.results[0] ? ( // here we have used !searchTerm because we don't want to show the hero image whne we are searching a movie 
      //and then we fetch the search term in the hooks of both the home.js and fetchmovies'
        <HeroImage // here we have names the props in the HeroImage.js file and we are declaring it here !
          // here in the following 3 lines the thing we are doing is
          // that we are using the things declared in the APIs to decalre the image title and text
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={`${state.results[0].original_title}`}
          text={`${state.results[0].overview}`}
        />
      ) : null}

      <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
        {' '}
        {/* here in the grid component what we are doing is that we are taking all the props declared 
        in the grid component and passing them here to and then for the thumbnails we have made 
        another component in which we are passing props those help them to get the thumbnails*/}
        {state.results.map(movie => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      <Spinner />
      <Thumb />
    </>
  );
};

export default Home;
