import React from 'react';
import Layout from './components/Layout/Layout';
import SmoothieBuilder from './containers/SmoothieBuilder/SmoothieBuilder';

function App() {
  return (
    <div >
      <Layout>
        <SmoothieBuilder></SmoothieBuilder>
      </Layout>
    </div>
  );
}

export default App;
