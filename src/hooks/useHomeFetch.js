import { useState, useEffect } from 'react';
// API
import API from './../API';
// Helpers
import { isPersistedState } from '../helpers';

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
  const [isLoadingMore, setIsLoadingMore] = useState(false); // this is the useEffect we use for the loading button

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

  //Intitial and Search
  useEffect(() => {
    if (!searchTerm) {
      // this means that this function wil only kickoff when the search term is active
      const sessionState = isPersistedState('homeState');

      if (sessionState) {
        setState(sessionState);
        return;
      }
    }

    setState(initialState); // this will wipe out the old state and make way for the new one
    fetchMovies(1, searchTerm); // here 1 means 1st page and it wont matter cause on the mount
    //we know that the first render is a empty '';
  }, [searchTerm]); // here the [] is searchTerm which tells us that it will render everytime
  // when the search term changes, and it will also render one time when it is mounted.

  // Load More ⌛
  useEffect(() => {
    if (!isLoadingMore) return; // ie when isLoadingMore is true

    fetchMovies(state.page + 1, searchTerm); // this will say that it will fetch another page and then do that in if we are in the seach_term also
    setIsLoadingMore(false); //here we are resetting it to false and thus the cycle will continue
  }, [isLoadingMore, state.page, searchTerm]); // here the [] is loadingMore which tells us that it will render everytime, here we are adding
  // the state.page and the searchTerm here because we already have declared it in the fetchMovie function to the

  // Write to the seassion Storage
  useEffect(() => {
    if (!searchTerm)
      // this means that this function wil only kickoff when the search term is active
      sessionStorage.setItem('homeState', JSON.stringify(state));
  }, [searchTerm, state]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};
