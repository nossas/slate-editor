import React, { Component } from 'react'
import { IntlProvider , addLocaleData } from 'react-intl'
import pt from 'react-intl/locale-data/pt'
import en from 'react-intl/locale-data/en'
import classnames from 'classnames'
import Utils from './Utils'
import initialEditorState from './initialEditorState'
import locales from '../intl/locale-data'

addLocaleData([...pt, ...en])

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language = (
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage
)

// Split locales with a region code
const removeRegionCode = lang => lang ? lang.toLowerCase().split(/[_-]+/)[0] : undefined
const languageWithoutRegionCode = removeRegionCode(language)

class SlateEditor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      state: props.initialState || initialEditorState,
      readOnly: false,
      uid: new Date().getUTCMilliseconds()
    }
  }

  onChange (state) {
    this.setState({ state })
  }

  changeState (state) {
    //
    // The `setTimeout` function is need to prevent the warning below:
    //
    // Warning: setState(...): Cannot update during an existing state transition
    // (such as within `render` or another component's constructor). Render methods
    // should be a pure function of props and state; constructor side-effects are
    // an anti-pattern, but can be moved to `componentWillMount`.
    //
    // It needs to check a better way to solve the case to update "outerState"
    // inside the SlateJS node component.
    //
    setTimeout(() => { this.setState(state) }, 0)
  }

  render () {
    const { children, style, className, plugins, defaultLanguage } = this.props

    const childProps = {
      plugins,
      state: this.state.state,
      outerState: this.state,
      onChange: this.onChange.bind(this),
      changeState: this.changeState.bind(this)
    }

    // Try the received full locale, fallback received locale without region code,
    // fallback browser full locale, fallback to browser locale without region code
    const messages = (
      locales[defaultLanguage] ||
      locales[removeRegionCode(defaultLanguage)] ||
      locales[language] ||
      locales[languageWithoutRegionCode]
    )

    return (
      <IntlProvider locale={defaultLanguage || language} messages={messages}>
        <div className={classnames('editor--root', className)} style={style}>
          {Utils.cloneElement(children, childProps)}
        </div>
      </IntlProvider>
    )
  }
}

export default SlateEditor
