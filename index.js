import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client'
import './index.css';
import Calendar from './Calendar';

// ReactDOM.render(
//   <React.StrictMode>
//     <Calendar />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const el = document.getElementById('root')
if (el === null) throw new Error('Root container missing in index.html')

const root = ReactDOM.createRoot(el)
root.render(
  <React.StrictMode>
    <Calendar />
  </React.StrictMode>
)