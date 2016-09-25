import React from 'react';
import { BrowserRouter, Match } from 'react-router';
import LayoutNav from './layout/Nav';
import LayoutFooter from './layout/Footer';
import Home from './Home';
import Example from './Example';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const title = 'Component Template';
const gh = 'reactstrap/component-template';
// if using a root url, remove the basename value here and in BrowserRouter
const basename = process.env.REACT_APP_GH_PAGES_PATH ?
  `/${process.env.REACT_APP_GH_PAGES_PATH}` || '';

const Docs = () => {
  return (
    <BrowserRouter basename={basename}>
      <div className="App">
        <LayoutNav title={title} gh={gh} />
        <Match exactly pattern="/" render={() => <Home title={title} gh={gh} />} />
        <Match pattern="/example" component={Example} />
        <LayoutFooter gh={gh} />
      </div>
    </BrowserRouter>
  );
};

export default Docs;
