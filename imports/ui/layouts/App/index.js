import React from 'react';
import PropTypes from 'prop-types';
import sizeMe from 'react-sizeme';
import { Group, Style } from '../../containers';
import { groups, stylesheet } from '../../../modules';

export default sizeMe()(
  class App extends React.PureComponent {
    static propTypes = { size: PropTypes.object.isRequired }
    render() {
      const { size } = this.props;
      return (
        <Style {...{ stylesheet }}>
          { groups.map(group => <Group {...{ ...group, size }}/>) }
        </Style>
      );
    }
  }
);
