import { useState, useEffect } from 'react';
// API
import API from './../API';

const initialState = {
  // this is the initial state of the api key !!
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

console.log(searchTerm);

  const fetchMovies = async (page, searchTerm = '') => {
    //here the seachTerm = '' because its the default value of the searchTerm
    // here we have defined a function called
    //fetchMovies using async function which has
    // 2 arguments called page and seachTerm, that
    // gives those arguments
    try {
      setError(false); // since it wont have any error rightnow
      setLoading(true); // since it will be loading rightnow
      const movies = await API.fetchMovies(searchTerm, page);
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
    fetchMovies(1);  // here 1 means 1st page
  }, []); // here the [] is empty that means that the function will only render once

  return { state, loading, error, setSearchTerm };
};
