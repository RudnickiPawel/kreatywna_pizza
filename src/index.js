import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import Layout from './Layout';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Layout />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);