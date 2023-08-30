import React from 'react';
import ReactDOM from 'react-dom/client';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import {Provider} from "react-redux"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Repository/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <Provider
   store={store}
   >
    <Theme 
   grayColor="sand" 
   radius="medium" 
   scaling="95%"
   panelBackground="translucent"
   appearance="dark"
   
   >
   <App />
   </Theme>
   </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
