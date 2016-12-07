import React from 'react';
import { SlateEditor } from '../components/SlateEditor';


const Home = ({title, gh}) => {
  return (
    <div className="docs">
      <h1>{title}</h1>
      <SlateEditor />
    </div>
  );
}

export default Home;
