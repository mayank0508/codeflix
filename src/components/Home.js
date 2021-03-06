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
import Button from './Button/Button';

//hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

//Images
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();
  console.log(state);

  if (error) return <div>Something went wrong...</div>; // this is because it will show a error if something goes wrong...

  return (
    // here <> is called a fragment it is used when we dont want to use the divs inside the components
    // here inside the fragment we can see that there is ternay operator there that says that if the
    // state.result's first element exists then render the props bellow else return null.
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
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
      {loading && <Spinner />}{' '}
      {/*here the js component tells that if the pages are loading then only you need to show the spinner */}
      {state.page < state.total_pages &&
        !loading && ( // here the 1st thing we see is that current page is smalled that the total
          // pages i.e the last last page then only run this thing and it should also not be loading
          // the show button with a text of load more
          <Button text="Load more" callback={() => setIsLoadingMore(true)} /> // here what will happen is that when the button is clicked 
          //the setIsLoadingMore will change from false to true, using a callback function
        )}
    </>
  );
};

export default Home;
