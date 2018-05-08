import React from 'react'
import { SlateEditor, SlateToolbar, SlateContent } from 'slate-editor'
import { BoldPlugin, BoldButton } from '@slate-editor/bold-plugin'
import { ItalicPlugin, ItalicButton } from '@slate-editor/italic-plugin'
import { UnderlinePlugin, UnderlineButton } from '@slate-editor/underline-plugin'
import { StrikethroughPlugin, StrikethroughButton } from '@slate-editor/strikethrough-plugin'
import { AlignmentPlugin, AlignmentButtonBar } from '@slate-editor/alignment-plugin'
import { LinkPlugin, LinkButton } from '@slate-editor/link-plugin'
import { ListPlugin, ListButtonBar } from '@slate-editor/list-plugin'
import { FontFamilyPlugin, FontFamilyDropdown } from '@slate-editor/font-family-plugin'
import { FontSizePlugin, FontSizeInput } from '@slate-editor/font-size-plugin'
import { ImagePlugin, ImageButton } from '@slate-editor/image-plugin'
import { ColorPlugin, ColorButton, ColorStateModel } from '@slate-editor/color-plugin'
import { GridPlugin, GridButtonBar } from '@slate-editor/grid-plugin'
import { EmbedPlugin, EmbedButton } from '@slate-editor/embed-plugin'
import { StateLoggerButton } from '@slate-editor/state-logger'
import { ToggleReadOnlyButton } from '@slate-editor/toggle-readonly'

import './Home.css'

const fontSizePluginOptions = { initialFontSize: 16 }
const colorPluginOptions = new ColorStateModel().rgba({ r: 100, g: 100, b: 100, a: 1 }).gen()

const plugins = [
  AlignmentPlugin(),
  BoldPlugin(),
  ColorPlugin(),
  EmbedPlugin(),
  FontFamilyPlugin(),
  FontSizePlugin(fontSizePluginOptions),
  GridPlugin(),
  ImagePlugin(),
  ItalicPlugin(),
  LinkPlugin(),
  ListPlugin(),
  StrikethroughPlugin(),
  UnderlinePlugin()
]

const classNames = {
  button: 'btn btn-primary not-rounded border border-gray',
  dropdown: 'select col-3 inline-block mx1 not-rounded',
  input: 'input col-3 inline-block mr1',
  lastButton: 'btn btn-primary not-rounded border border-gray linebreak'
}
const styles = {
  button: {
    borderRight: '1px solid #fff'
  },
  dropdown: {
    position: 'relative',
    top: 1,
    backgroundColor: 'white',
    height: 38,
    paddingLeft: 20,
    border: '3px solid #0275d8',
    color: '#0275d8',
    margin: '0',
    WebkitAppearance: 'none',
    padding: '0 10px 0 15px'
  },
  input: {
    position: 'relative',
    top: 1,
    backgroundColor: 'white',
    borderRadius: 0,
    height: 16,
    margin: 0,
    color: '#0275d8',
    border: '3px solid #0275d8'
  }
}

const Version = ({ version }) => (
  <div style={{ textAlign: 'right' }}>
    <small>v{version}</small>
  </div>
)

const Home = ({ title, version }) => {
  return (
    <div className='page--home'>
      <div className='header'>
        <h1>{title}</h1>
        <p>A rich text editor based on SlateJS</p>
      </div>
      <SlateEditor plugins={plugins}>
        <Version version={version} />
        <SlateToolbar>
          <BoldButton className={classNames.button} />
          <ItalicButton className={classNames.button} />
          <UnderlineButton className={classNames.button} />
          <StrikethroughButton className={classNames.button} />
          <AlignmentButtonBar className={classNames.button} />
          <LinkButton className={classNames.button} />
          <ListButtonBar className={classNames.button} />
        </SlateToolbar>

        <SlateToolbar>
          <FontFamilyDropdown className={classNames.dropdown} style={styles.dropdown} />
          <FontSizeInput
            {...fontSizePluginOptions}
            className={classNames.input}
            style={styles.input}
          />
          <ImageButton
            className={classNames.button}
            signingUrl={
              process.env.REACT_APP_API_URL +
              process.env.REACT_APP_SIGNING_URL_ENDPOINT
            }
          />
          <ColorButton
            className={classNames.button}
            initialState={colorPluginOptions}
            pickerDefaultPosition={{ x: -520, y: 17 }}
          />
          <GridButtonBar className={classNames.button} />
          <EmbedButton className={classNames.button} />
        </SlateToolbar>

        <SlateContent />

        <SlateToolbar className='toolbar--footer'>
          <StateLoggerButton className={classNames.button} />
          <ToggleReadOnlyButton className={classNames.button} />
        </SlateToolbar>
      </SlateEditor>

      <div className='editor--root'>
        <p>
          You had a problem?!
          Report click <a
            href="https://github.com/nossas/slate-editor/issues/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>.
        </p>
      </div>
    </div>
  )
}

export default Home
