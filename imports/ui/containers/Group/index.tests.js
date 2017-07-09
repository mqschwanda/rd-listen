/* eslint-disable max-len */

/**
  Testing our test component
**/
import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';

import groups from '../../../modules/groups';
import { Banner, List, ListItem } from '../../components';
import Group from './index';

const size = { width: 400 };

const shallowComponent = (props = {}) => shallow(<Group {...props} />);
const mountComponent = (props = {}) => mount((<Group {...props} />));

describe('<Group />', () => {
  if (Meteor.isClient) {
    it('should render a `<div>` tag', () => {
      groups.forEach(({ banner, list }) => {
        const Component = shallowComponent({ banner, list, size });
        expect(Component.type()).toEqual('div');
      });
    });
    it('should render a `<Banner />` component', () => {
      groups.forEach(({ banner, list }) => {
        const Component = mountComponent({ banner, list, size });
        expect(Component.find(Banner).length).toBe(1);
      });
    });
    it('should render a `<List />` component', () => {
      groups.forEach(({ banner, list }) => {
        const Component = mountComponent({ banner, list, size });
        expect(Component.find(List).length).toBe(1);
      });
    });
    it('should render all `<ListItem />` components from it\'s `list` prop', () => {
      groups.forEach(({ banner, list }) => {
        const Component = mountComponent({ banner, list, size });
        expect(Component.find(ListItem).length).toBe(list.length);
      });
    });

    describe('props', () => {
      it('should adopt a `banner` prop', () => {
        groups.forEach(({ banner, list }) => {
          const Component = mountComponent({ banner, list, size });
          expect(Component.props().banner).toEqual(banner);
        });
      });
      it('should adopt a `list` prop', () => {
        groups.forEach(({ banner, list }) => {
          const Component = mountComponent({ banner, list, size });
          expect(Component.props().list).toEqual(list);
        });
      });
    });
  }
});
