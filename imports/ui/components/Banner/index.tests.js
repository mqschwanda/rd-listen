/**
  Testing for the the <Banner/> component
**/
import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';

import Banner from './index';
import { content } from '../../../modules';

const shallowComponent = (props = {}) => shallow(<Banner {...props} />);
const mountComponent = (props = {}) => mount(<Banner {...props} />);

describe('<Banner />', () => {
  it('should render an `<img>` tag', () => {
    const Component = shallowComponent();
    expect(Component.type()).toEqual('img');
  });
  describe('props', () => {
    it('should adopt a `banner` prop', () => {
      content.forEach(({ banner }) => {
        const Component = mountComponent({ banner });
        expect(Component.props().banner).toEqual(banner);
      });
    });
    it('should set a `src` attribute from a `banner` prop', () => {
      content.forEach(({ banner }) => {
        const Component = shallowComponent({ banner });
        expect(Component.prop('src')).toEqual(banner);
      });
    });
  });
});
