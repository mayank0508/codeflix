import React, { useState, useEffect, useRef } from 'react';
//Image
import searchIcon from '../../images/search-icon.svg';

//Styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
  // there is a diffrence betwween the () => {} and () => (),
  // the prior one is used when we want to return the a particular
  //function or so, but we use the last one instead when we dont want to return anything
  // check this tweets out for refrence https://twitter.com/MayankThakurrr/status/1419389685059653632

  const [state, setState] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-button" />
        <input
          type="text"
          placeholder="Search movie"
          onChange={event => setState(event.currentTarget.value)} // here we are providing this inline
          //function so that i does not run straight away but takes the arguments before running the
          //code straight away
          value={state} // cause here we will give the value
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
