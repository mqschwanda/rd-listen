/**
  The `<ListItem/>` component...
**/

import styled from 'styled-components';

export default styled.div`
  width: ${({ isHalf }) => (isHalf ? '50' : '100')}%;
  color: ${({ fontColor }) => (fontColor || '#fff')};
  background: ${({ backgroundColor }) => (backgroundColor || '#000')};
  border: 1px solid ${({ borderColor }) => (borderColor || '#393939')};
  text-align: center;
  padding: 0.5em;
  font-size: 18px;
  font-family: 'Futura';
  line-height: 1.6em;
  box-sizing: border-box;
  float: left;
`;
