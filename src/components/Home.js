import React, { useState, useEffect } from 'react';
//API {it was already there declare so i didnt have to worry about it 😎}


//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'; // these are the default congiuration values
//Component

import { useHomeFetch } from '../hooks/useHomeFetch';
//hooks

//Images
import NoImage from '../images/no_image.jpg';

const Home = () => {

  const { state, loading, error } = useHomeFetch();
  console.log(state);

  return <div>Home page</div>;
};

export default Home;
