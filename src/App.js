import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Products from './Products';
import ViewProduct from './ViewProducts';

function App() {
  return <>
    <div className='container-fluid'>
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/view-more' element={<ViewProduct/>} />
      </Routes>
    </div>
  </>
}

export default App;
