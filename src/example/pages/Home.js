import React from 'react'

import { SlateEditor, SlateToolbar, SlateContent } from '../../package/SlateEditor'
import BoldPlugin, { BoldButton } from '../../package/plugins/slate-bold-plugin'
import ItalicPlugin, { ItalicButton } from '../../package/plugins/slate-italic-plugin'
import UnderlinePlugin, { UnderlineButton } from '../../package/plugins/slate-underline-plugin'
import StrikethroughPlugin, { StrikethroughButton } from '../../package/plugins/slate-strikethrough-plugin'
import ImagePlugin, { ImageButton } from '../../package/plugins/slate-image-plugin'
import LinkPlugin, { LinkButton } from '../../package/plugins/slate-link-plugin'
import ColorPlugin, { ColorButton, ColorStateModel } from '../../package/plugins/slate-color-plugin'
import FontFamilyPlugin, { FontFamilyDropdown } from '../../package/plugins/slate-font-family-plugin'
import FontSizePlugin, { FontSizeInput } from '../../package/plugins/slate-font-size-plugin'
import AlignmentPlugin, { AlignmentButtonBar } from '../../package/plugins/slate-alignment-plugin'
import ListPlugin, { ListButton } from '../../package/plugins/slate-list-plugin'
import GridPlugin, { GridButtonBar } from '../../package/plugins/slate-grid-plugin'
import EmbedPlugin, { EmbedButton } from '../../package/plugins/slate-embed-plugin'

import { StateLoggerButton } from '../../package/plugins/slate-state-logger'
import { ToggleReadOnlyButton } from '../../package/plugins/slate-toggle-readonly'

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
  GridPlugin(),
  EmbedPlugin(),
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
  dropdown: {
    position: 'relative',
    top: 2,
    backgroundColor: 'transparent',
    WebkitAppearance: 'none',
    WebkitBorderRadius: 0,
    height: 38,
    paddingLeft: 20,
    border: '3px solid #0275d8',
    color: '#0275d8',
    margin: '-3px 0',
    padding: '0 10px',
  },
  input: {
    position: 'relative',
    top: 2,
    backgroundColor: 'transparent',
    borderRadius: 0,
    height: 38,
    margin: 0,
    color: '#0275d8',
    border: '3px solid #0275d8',
  },
}

const Home = ({ title }) => {
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
          <FontFamilyDropdown className={classNames.dropdown} style={styles.dropdown} />
          <FontSizeInput className={classNames.input} {...fontSizePluginOptions} style={styles.input} />
          <AlignmentButtonBar className={classNames.button} />
          <ListButton className={classNames.button} />
          <GridButtonBar className={classNames.button} />
          <EmbedButton className={classNames.button} />
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
