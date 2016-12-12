import React from 'react';
import { BrowserRouter, Match } from 'react-router';
import Home from './Home';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const title = 'Reboo Slate Editor';
const gh = 'ourcities/rebu-editor';
// if using a root url, remove the basename value here and in BrowserRouter
const basename = process.env.REACT_APP_GH_PAGES_PATH ?
  `/${process.env.REACT_APP_GH_PAGES_PATH}` : '';

const Docs = () => {
  return (
    <BrowserRouter basename={basename}>
      <div className="App">
        {/* Begin Routes */}
        <Match exactly pattern="/" render={() => <Home title={title} gh={gh} />} />
        {/* End Routes */}
      </div>
    </BrowserRouter>
  );
};

export default Docs;
