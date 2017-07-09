/**
  Testing our test component
**/
import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import groups from '../../../modules/groups';
import { Group } from '../../containers';
import App from './index';

const size = { width: 400 };

const mountComponent = (props = {}) => mount((<App {...props} />));

describe('<Group />', () => {
  if (Meteor.isClient) {
    it('should render all `<Group />` components from a `groups` array', () => {
      const Component = mountComponent({ size });
      expect(Component.find(Group).length).toBe(groups.length);
    });
  }
});
