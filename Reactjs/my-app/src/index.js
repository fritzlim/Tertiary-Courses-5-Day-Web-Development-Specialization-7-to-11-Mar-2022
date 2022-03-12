import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from "react-router-dom";
import './index.css';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Hello from './component/Hello';
import Ticker from './component/Ticker';
import Demo from './component/Demo';
import Welcome from './component/Welcome';
import ToDo from './component/ToDo';
import ToDoV3 from './component/ToDoV3';
import ToDoV4 from './component/ToDoV4';
import ToDoV5 from './component/ToDoV5';
import ToDoV5FunctionComponent from './component/ToDoV5FunctionComponent';
import ClockFunctionComponent from './component/ClockFunctionComponent';
import BootstrapTesting from './component/BootstrapTesting';
import reportWebVitals from './reportWebVitals';
import {groceryItems, name, items} from './data/groceryItems';

// const groceryItems = ['Groceries', 'Lunch']; // Placed this in data/groceryItems.js

ReactDOM.render(
  <React.StrictMode>
    <div className="container my-4">
      {/* <Ticker /> */}
      <BootstrapTesting />
      <ClockFunctionComponent/>
      <ToDoV5FunctionComponent />
      <Welcome text="Fritz" text1="asdfsaf"/>
      <ToDoV3 items={groceryItems} title={name}/>
      <div className="red">
        <Demo />
      </div>
      <ToDo />
      <ToDoV3 />
      <ToDoV4 items1={items} items2={groceryItems}/>
      <ToDoV5 />
      <Hello />
    </div>
    <App />
    <Hello />
    {/* <BrowserRouter>
    
    </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
