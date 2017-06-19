/**
  The `<Banner/>` component is a full width image used as a header for every
  list group.
**/

import styled from 'styled-components';

export default styled.img.attrs({ src: props => props.banner })`
  width: 100%;
  height: auto;
`;
