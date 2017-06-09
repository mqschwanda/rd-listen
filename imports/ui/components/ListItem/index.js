import React from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isHalf: PropTypes.bool.isRequired,
  }

  render() {
    const { children, isHalf } = this.props;

    return (
      <div className={`list-item ${isHalf ? 'half' : 'full'}`}>
        { children }
      </div>
    );
  }
}
