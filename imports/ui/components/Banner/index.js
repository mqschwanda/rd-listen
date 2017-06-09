/**
  The `<Banner/>` component is a full width image used as a header for every
  list group.
**/

import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ banner }) => <img className='banner' src={banner} />;

Banner.propTypes = { banner: PropTypes.string.isRequired };

export default Banner;
