/* eslint-disable no-unused-expressions, max-len */

import React from 'react';
import PropTypes from 'prop-types';
import sizeMe from 'react-sizeme';
import { connect } from 'react-redux';
import { injectGlobal } from 'styled-components';
import { Group } from '../../containers';
import { content } from '../../../modules';
import { updateSize } from '../../../reducers/size';

injectGlobal`
  @font-face {
    font-family:'Futura';
    src: url('/fonts/FuturaStd-CondensedBold_gdi.eot');
    src: url('/fonts/FuturaStd-CondensedBold_gdi.eot?#iefix') format('embedded-opentype'),
      url('/fonts/FuturaStd-CondensedBold_gdi.woff') format('woff'),
      url('/fonts/FuturaStd-CondensedBold_gdi.ttf') format('truetype'),
      url('/fonts/FuturaStd-CondensedBold_gdi.otf') format('opentype'),
      url('/fonts/FuturaStd-CondensedBold_gdi.svg#FuturaStd-CondensedBold') format('svg');
    font-weight: 700;
    font-style: normal;
    font-stretch: condensed;
    unicode-range: U+0020-00FE;
  }
`;

@sizeMe()
@connect()
export default class App extends React.PureComponent {
  static propTypes = { size: PropTypes.object }
  shouldComponentUpdate(nextProps) { return this.props.size !== nextProps.size; }
  componentDidUpdate() { this.props.dispatch(updateSize(this.props.size)); }
  render() { return <div>{ content.map(group => <Group {...group}/>) }</div>; }
}
