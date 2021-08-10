import { useState, useEffect } from 'react'; // since this is a custom hook we have to import these hooks
import API from '../API'; // this was originally there
import { isPersistedState } from '../helpers';

export const useMovieFetch = movieId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true); // this is true because this time it will be fetching the data from the api thats why it will be loading
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId); // we are using the movieId inside the () because we are passing the const to movieId
        // Get Directors only
        const directors = credits.crew.filter(
          // here we are filtering out the directors name from the credits list;
          member => member.job === 'Director'
        );

        setState({
          // here we are setting the state to a ...movie and actor and director .
          ...movie,
          actor: credits.crew,
          directors
        });
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersistedState(movieId); // here we are checking for the presence of the session state

    if (sessionState) {
      // here if we do return true then we setState to sessionState
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchMovie(); // we need to invoke it to get the data from the server
  }, [movieId]); // here we have movieId because it will be change only when the movieId will change

  // Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state)); //
  }, [movieId, state]); // we should always specify all the dependencies for the useEffect, what a dependeciy does is that it runs a function when that certain state changes

  return { state, loading, error };
};
