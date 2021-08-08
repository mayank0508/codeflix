import styled from 'styled-components';
// Config
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
  background: ${(
    { backdrop } // here {({ backdrop: })} this is a prop which is being destructured
  ) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#0000'};
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animateMovieInfo 1s;

    @keyframes animateMovieInfo {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Content = styled.div``;

export const Text = styled.div``;
