import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<h1>Product listing component</h1>}></Route>
          <Route path="/add" element={<h1>Add Product component</h1>}></Route>
          <Route path="/update" element={<h1>Update Product component</h1>}></Route>
          <Route path="/logout" element={<h1>logout component</h1>}></Route>
          <Route path="/profile" element={<h1>Profile component</h1>}></Route>
        </Routes>     
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
