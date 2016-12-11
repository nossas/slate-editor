import React from 'react'
import { SlateEditor, SlateToolbar, SlateContent } from '../components/SlateEditor'
import BoldPlugin, { BoldButton } from '../components/modules/slate-bold-plugin'
import ItalicPlugin, { ItalicButton } from '../components/modules/slate-italic-plugin'
import UnderlinePlugin, { UnderlineButton } from '../components/modules/slate-underline-plugin'
import StrikethroughPlugin, { StrikethroughButton } from '../components/modules/slate-strikethrough-plugin'
import ImagePlugin, { ImageButton } from '../components/modules/slate-image-plugin'
import LinkPlugin, { LinkButton } from '../components/modules/slate-link-plugin'
import ColorPlugin, { ColorButton, ColorStateModel } from '../components/modules/slate-color-plugin'
import FontFamilyPlugin, { FontFamilyDropdown } from '../components/modules/slate-font-family-plugin'
import FontSizePlugin, { FontSizeInput } from '../components/modules/slate-font-size-plugin'
import AlignmentPlugin, { AlignmentButton } from '../components/modules/slate-alignment-plugin'
import ListPlugin, { ListButton } from '../components/modules/slate-list-plugin'

import { StateLoggerButton } from '../components/modules/slate-state-logger'
import { ToggleReadOnlyButton } from '../components/modules/slate-toggle-readonly'

const fontSizePluginOptions = { initialFontSize: 16 }
const colorPluginOptions = new ColorStateModel().rgba({ r: 100, g: 100, b: 100, a: 1  }).gen()

const plugins = [
  BoldPlugin(),
  ItalicPlugin(),
  UnderlinePlugin(),
  StrikethroughPlugin(),
  ImagePlugin(),
  LinkPlugin(),
  ColorPlugin(),
  FontFamilyPlugin(),
  FontSizePlugin(fontSizePluginOptions),
  AlignmentPlugin(),
  ListPlugin(),
]

const classNames = {
  button: 'btn btn-primary not-rounded border border-gray',
  dropdown: 'select col-3 inline-block mx1',
  input: 'input col-3 inline-block mr1',
}
const styles = {
  button: {
    borderRight: '1px solid #fff',
  },
  fixDropdown: {
    position: 'relative',
    top: 3,
    border: 0,
    margin: 0,
    backgroundColor: '#0275d8',
    WebkitAppearance: 'none',
    WebkitBorderRadius: 0,
    height: 38,
    color: '#fff',
    paddingLeft: 20,
  },
  fixInput: {
    position: 'relative',
    top: 2,
    border: 0,
    backgroundColor: '#0275d8',
    borderRadius: 0,
    height: 38,
    margin: 0,
    color: '#fff',
  },
}

const Home = ({ title, gh }) => {
  return (
    <div className="docs">
      <h1>{title}</h1>
      <SlateEditor plugins={plugins}>

        <SlateToolbar>
          <BoldButton className={classNames.button} />
          <ItalicButton className={classNames.button} />
          <UnderlineButton className={classNames.button} />
          <StrikethroughButton className={classNames.button} />
          <ImageButton className={classNames.button} />
          <LinkButton className={classNames.button} />
          <ColorButton className={classNames.button} initialState={colorPluginOptions} pickerDefaultPosition={{ x: -520, y: 17 }} />
          <FontFamilyDropdown className={classNames.dropdown} style={styles.fixDropdown} />
          <FontSizeInput className={classNames.input} {...fontSizePluginOptions} style={styles.fixInput} />
          <AlignmentButton className={classNames.button} />
          <ListButton className={classNames.button} />
        </SlateToolbar>

        <SlateContent />

        <SlateToolbar className="footer">
          <StateLoggerButton className={classNames.button} />
          <ToggleReadOnlyButton className={classNames.button} />
        </SlateToolbar>

      </SlateEditor>
    </div>
  );
}

export default Home
