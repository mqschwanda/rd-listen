/**
  Testing our test component
**/
import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';

import ListItem from './index';

const shallowComponent = (props = {}) => shallow(<ListItem {...props} />);
const mountComponent = (props = {}) => mount(<ListItem {...props} />);

describe('<ListItem />', () => {
  if (Meteor.isClient) {
    it('should render a `<div>` tag', () => {
      const Component = shallowComponent();
      expect(Component.type()).toEqual('div');
    });
    describe('props', () => {
      it('should adopt a `children` prop', () => {
        const children = (<h1>Test</h1>);
        const Component = mountComponent({ children });
        expect(Component.props().children).toEqual(children);
      });
      it('should render children from it\'s `children` prop', () => {
        const children = (<h1>Test</h1>);
        const Component = shallowComponent({ children });
        expect(Component.contains(children)).toBe(true);
      });
      it('should adopt an `isHalf` prop', () => {
        const children = (<h1>Test</h1>);
        const Component = mountComponent({ children });
        expect(Component.props().children).toEqual(children);
      });
      it('should change `className` from it\'s `isHalf` prop', () => {
        const Component = shallowComponent();
        Component.setProps({ isHalf: true });
        expect(Component.hasClass('half')).toBe(true);
        expect(Component.hasClass('full')).toBe(false);
        Component.setProps({ isHalf: false });
        expect(Component.hasClass('full')).toBe(true);
        expect(Component.hasClass('half')).toBe(false);
      });
    });
  }
});
