import { useState, useEffect } from 'react'; // since this is a custom hook we have to import these hooks
import API from '../API'; // this was originally there

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

    fetchMovie(); // we need to invoke it t the data from the server
  }, [movieId]); // here we have movieId because it will be change only when the movieId will change

  return { state, loading, error };
};
