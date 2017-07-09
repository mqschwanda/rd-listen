/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars
import update from 'react-addons-update';

import { Banner, List, ListItem } from 'components';

const breakpoint = 500;
const isOdd = array => array.length % 2;
const push = (array, value) => update(array, { $push: value });

@connect(store => ({ size: store.size }))
export default class Group extends React.PureComponent {
  static propTypes = {
    banner: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(String).isRequired,
    size: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.handleState = this.handleState.bind(this);
    this.state = this.handleState(props);
  }

  shouldComponentUpdate(nextProps) {
    return (nextProps.size.width > breakpoint) !== this.state.isHalf;
  }

  componentDidUpdate() { this.setState(this.handleState(this.props)); }

  handleState(props) {
    let newList;
    const { list, size } = props;
    const isHalf = size.width > breakpoint;
    if (isOdd(list) && isHalf) newList = push(list, [(<div key='nbsp'>&nbsp;</div>)]);
    else newList = [...list];

    return { newList, isHalf };
  }

  render() {
    const { banner } = this.props;
    const { newList, isHalf } = this.state;
    return (
      /* eslint-disable react/jsx-key */
      <div>
        <Banner {...{ banner }}/>
        <List>
          { newList.map((children, key) => <ListItem {...{ children, isHalf, key }}/>) }
        </List>
      </div>
    );
  }
}
