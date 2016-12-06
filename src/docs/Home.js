import React from 'react';
import { REditor } from '../components';


const Home = ({title, gh}) => {
  return (
    <div className="docs">
      <h1>{`${title} live demo`}</h1>
      <REditor />
    </div>
  );
}

export default Home;
