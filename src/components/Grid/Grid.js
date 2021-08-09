import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './Grid.styles';


const Grid = ({ header, children }) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>
            {children}
        </Content>
    </Wrapper>
)

Grid.propTypes = {
    header: PropTypes.string, // here we are not checking for the children property because children in a builtin prop
}


export default Grid;    


