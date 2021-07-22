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

  const fetchMovies = async (page, searchTerm = "") => {
    // here we have defined a function called
    //fetchMovies using async function which has
    // 2 arguments called page and seachTerm, that
    // gives those arguments
    try {
      setError(false);
      setLoading(true);

      const movies = await apiSettings.fetchMovies(searchTerm, page);
      console.log(movies);
      // here we have used the await method to fetch the movies from the API
    } catch (error) {
      setError(true);
    } // here we are using the catch method to catch the error
  };

//Intitial Render
useEffect(() => {
fetchMovies(1)
}, []) // here the [] is empty that means that the function will only render once

  
  return <div>Home page</div>;
};

export default Home;
