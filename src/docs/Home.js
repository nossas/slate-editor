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
]

const Home = ({ title, gh }) => {
  return (
    <div className="docs">
      <h1>{title}</h1>
      <SlateEditor plugins={plugins}>

        <SlateToolbar>
          <BoldButton />
          <ItalicButton />
          <UnderlineButton />
          <StrikethroughButton />
          <ImageButton />
          <LinkButton />
          <ColorButton initialState={colorPluginOptions} />
          <FontFamilyDropdown />
          <FontSizeInput initialFontSize={fontSizePluginOptions.initialFontSize} />
          <AlignmentButton />
        </SlateToolbar>

        <SlateContent />

        <SlateToolbar className="footer">
          <StateLoggerButton />
          <ToggleReadOnlyButton />
        </SlateToolbar>

      </SlateEditor>
    </div>
  );
}

export default Home
