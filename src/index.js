import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './context/CartContextProvider';


const TestContext = React.createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TestContext.Provider value={{ testValue: 42, testValue2: 10 }}>
    <CartContextProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
      </CartContextProvider>
  </TestContext.Provider>
);


export default TestContext;