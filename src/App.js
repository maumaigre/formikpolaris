import React from 'react';

import './App.css';
import SignupForm from './SignupForm';
import {AppProvider} from '@shopify/polaris';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <SignupForm/>
      </div>
    </AppProvider>
  );
}

export default App;
