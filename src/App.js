import Header from '../src/containers/Header.js';
import Button from '../src/containers/Button';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter
} from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail.js';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact element={<ProductListing />} path="/"/> 
        <Route element={<ProductDetail />} path="/product/:productId"/>
        <Route>404 Not Found!</Route>
      </Routes>
    </BrowserRouter>
    
       <Header/>
    
       
    </>
  );
}

export default App;
