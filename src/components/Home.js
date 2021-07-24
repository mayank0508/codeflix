import React, { useState, useEffect } from 'react';
//API {it was already there declare so i didnt have to worry about it 😎}
import apiSettings from './../API';

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'; // these are the default congiuration values
//Component

//hooks

//Images
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTerm = '') => {
    // here we have defined a function called
    //fetchMovies using async function which has
    // 2 arguments called page and seachTerm, that
    // gives those arguments
    try {
      setError(false); // since it wont have any error rightnow
      setLoading(true); // since it will be loading rightnow
      const movies = await apiSettings.fetchMovies(searchTerm, page);
      // here we have used the await method to fetch the movies from the API

      setState(prev => ({
        // this prev will give us the movies, and when
        //we call the new movies then it will become available old moviess

        ...movies, // here we have used it this way to make it re render, which is very imp
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results] // this is a ternary operation that i have wrote to
        // render the new movies in the array without removing the old ones.
      }));
    } catch (error) {
      setError(true);
    } // here we are using the catch method to catch the error

    setLoading(false); // now since everything has loaded 👍
  };

  //Intitial Render
  useEffect(() => {
    fetchMovies(1);
  }, []); // here the [] is empty that means that the function will only render once

console.log(state);

  return <div>Home page</div>;
};

export default Home;
