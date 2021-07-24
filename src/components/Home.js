import React, { useState, useEffect } from 'react';
//API {it was already there declare so i didnt have to worry about it 😎}

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'; // these are the default congiuration values

//Component
import HeroImage from './HeroImage/HeroImage';

//hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

//Images
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state);

  return (
    // here <> is called a fragment it is used when we dont want to use the divs inside the components
    // here inside the fragment we can see that there is ternay operator there that says that if the 
    // state.result's first element exists then render the props bellow else return null.
    <>
      {state.results[0] ? (
        <HeroImage // here we have names the props in the HeroImage.js file and we are declaring it here !
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={`${state.results[0].original_title}`}
          text={`${state.results[0].overview}`}
        />
      ) : null}
    </>
  );
};

export default Home;
