import React from 'react';
import { mount } from 'enzyme';
import REditor from './REditor';

describe('REditor', () => {
  it('renders without crashing', () => {
    mount(<REditor />);
  });
});
