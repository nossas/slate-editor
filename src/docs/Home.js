import React from 'react'
import { SlateEditor, SlateToolbar, SlateContent } from '../components/SlateEditor'
import BoldPlugin, { BoldButton } from '../components/modules/slate-bold-plugin'
import ItalicPlugin, { ItalicButton } from '../components/modules/slate-italic-plugin'
import UnderlinePlugin, { UnderlineButton } from '../components/modules/slate-underline-plugin'
import ImagePlugin, { ImageButton } from '../components/modules/slate-image-plugin'
import LinkPlugin, { LinkButton } from '../components/modules/slate-link-plugin'
import FontFamilyPlugin, { FontFamilyDropdown } from '../components/modules/slate-font-family-plugin'
import FontSizePlugin, { FontSizeInput } from '../components/modules/slate-font-size-plugin'
import { StateLoggerButton } from '../components/modules/slate-state-logger'
import { ToggleReadOnlyButton } from '../components/modules/slate-toggle-readonly'

const fontSizePluginOptions = { initialFontSize: 16 }

const plugins = [
  BoldPlugin(),
  ItalicPlugin(),
  UnderlinePlugin(),
  ImagePlugin(),
  LinkPlugin(),
  FontFamilyPlugin(),
  FontSizePlugin(fontSizePluginOptions),
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
          <ImageButton />
          <LinkButton />
          <FontFamilyDropdown />
          <FontSizeInput initialFontSize={fontSizePluginOptions.initialFontSize} />
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
