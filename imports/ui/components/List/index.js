import React from 'react';
import PropTypes from 'prop-types';

const List = ({ children }) => <div className='list'>{ children }</div>;

List.propTypes = { children: PropTypes.node.isRequired };

export default List;
