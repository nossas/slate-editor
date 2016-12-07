import React from 'react'
import { SlateEditor, SlateToolbar, SlateContent } from '../components/SlateEditor'
import BoldPlugin, { BoldButton } from '../components/modules/slate-bold-plugin'
import ItalicPlugin, { ItalicButton } from '../components/modules/slate-italic-plugin'
import ImagePlugin, { ImageButton } from '../components/modules/slate-image-plugin'
import LinkPlugin, { LinkButton } from '../components/modules/slate-link-plugin'
import { StateLoggerButton } from '../components/modules/slate-state-logger'
import { ToggleReadOnlyButton } from '../components/modules/slate-toggle-readonly'

const plugins = [
  BoldPlugin(),
  ItalicPlugin(),
  ImagePlugin(),
  LinkPlugin(),
]

const Home = ({ title, gh }) => {
  return (
    <div className="docs">
      <h1>{title}</h1>
      <SlateEditor plugins={plugins}>
        <SlateToolbar>
          <BoldButton />
          <ItalicButton />
          <ImageButton />
          <LinkButton />
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
