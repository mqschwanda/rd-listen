/**
  The `<ListItem/>` component...
**/

import styled from 'styled-components';

export default styled.div`
  width: ${props => (props.isHalf ? '50' : '100')}%;
  color: ${props => (props.fontColor || '#fff')};
  background: ${props => (props.backgroundColor || '#000')};
  border: 1px solid ${props => (props.borderColor || '#393939')};
  text-align: center;
  padding: 0.5em;
  font-size: 18px;
  font-family: 'Futura';
  line-height: 1.6em;
  box-sizing: border-box;
  float: left;
`;
