import React from 'react'
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import { version } from '../../package.json'
import Home from './pages/Home'
import './index.css'

const history = createBrowserHistory()

export default () => (
  <Router history={history}>
    <Home title='Nossas - SlateJS Editor' version={version} />
  </Router>
)
