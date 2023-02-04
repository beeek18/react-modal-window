import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppAnimated from './AppAnimated';
import AppWithProps from './AppWithProps';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppAnimated /> */}
    <AppWithProps />
  </React.StrictMode>,
);
