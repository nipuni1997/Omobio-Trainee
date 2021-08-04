import React from 'react';
// Importing the Context Provider & Home Component
import ContextProvider from './contexts/Context';
import Home from './components/Home'

function App() {
  return (
    <ContextProvider>
        <Home/>
    </ContextProvider>
  );
}

export default App;