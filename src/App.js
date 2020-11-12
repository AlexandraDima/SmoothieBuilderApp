import React from 'react';
import { Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SmoothieBuilder from './containers/SmoothieBuilder/SmoothieBuilder';
import Checkout from './containers/Checkout/Checkout';


function App() {
  return (

    <div >
      
      <Layout>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" exact component={SmoothieBuilder} />
      </Layout> 
   
    </div>

  );
}

export default App;
