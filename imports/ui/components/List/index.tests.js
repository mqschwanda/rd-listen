/**

**/
import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';

import List from './index';

const shallowComponent = (props = {}) => shallow(<List {...props} />);
const mountComponent = (props = {}) => mount(<List {...props} />);

describe('<List />', () => {
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
    });
  }
});
