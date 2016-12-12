import React from 'react';
import { mount } from 'enzyme';
import SlateEditor from '../SlateEditor';

describe('SlateEditor', () => {
  it('renders without crashing', () => {
    mount(<SlateEditor />);
  });
});
