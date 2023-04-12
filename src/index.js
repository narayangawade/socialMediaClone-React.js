import React from 'react';
import ReactDOM from 'react-dom';


import './styles/index.css';
import { App } from './components';
 import { AuthProvide, PostsProvider } from './providers';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvide>
      <PostsProvider>
      <App />
      </PostsProvider>
    
    </AuthProvide>
      
    
  </React.StrictMode>,
  document.getElementById('root')
);
