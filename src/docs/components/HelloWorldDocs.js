import React from 'react';
import DocumentComponent from '../layout/DocumentComponent';
import { HelloWorld } from '../../components';

const components = [];
// Add your component proptype data here
// multiple component proptype documentation supported
components.push({
  name: 'HelloWorld',
  proptypes: `
    {
      name: PropTypes.string,
      message: PropTypes.string,
      children: PropTypes.any
    }
  `
});

const examples = [];
// Add your component example data here
// multiple examples supported
examples.push({
  name: 'HelloWorld - Basic',
  demo: (
    <HelloWorld />
  ),
  source: `
    <HelloWorld />
  `
});

examples.push({
  name: 'HelloWorld - Advanced',
  demo: (
    <HelloWorld name="Ground Control" message="I'm stepping through the door">
      <em>And I'm floating in a most peculiar way</em>
    </HelloWorld>
  ),
  source: `
    <HelloWorld name="Ground Control" message="I'm stepping through the door">
      <em>And I'm floating in a most peculiar way</em>
    </HelloWorld>
  `
});

const Documentation = () => {
  return (
    <DocumentComponent
      name="HelloWorld"
      components={components}
      examples={examples}>
      <p>Description for component</p>
    </DocumentComponent>
  );
};

export default Documentation;
