import React from 'react';
import { mount } from 'enzyme';
import HelloWorld from './HelloWorld';

describe('HelloWorld', () => {
  it('renders without crashing', () => {
    mount(<HelloWorld />);
  });

  it('renders default prop values', () => {
    const wrapper = mount(<HelloWorld />);

    expect(wrapper.find('h1').text()).toEqual('Hello World!');
    expect(wrapper.find('p.lead').text()).toEqual('This is a simple component.');
  });

  it('renders with custom prop values', () => {
    const name = "Ground Control";
    const message = "I'm stepping through the door"
    const wrapper = mount(<HelloWorld name={name} message={message} />);

    expect(wrapper.find('h1').text()).toEqual(`Hello ${name}!`);
    expect(wrapper.find('p.lead').text()).toEqual(message);
  });

  it('renders children', () => {
    const wrapper = mount(
      <HelloWorld>
        <p className="test">Testing</p>
      </HelloWorld>
    );

    expect(wrapper.find('p.test').text()).toEqual('Testing');
  });
});
