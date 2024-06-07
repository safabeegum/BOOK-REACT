import logo from './logo.svg';
import './App.css';
import AddBooks from './components/AddBooks';
import SearchBooks from './components/SearchBooks';
import DeleteBooks from './components/DeleteBooks';
import ViewBooks from './components/ViewBooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddBooks/>}/>
      <Route path='/search' element={<SearchBooks/>}/>
      <Route path='/delete' element={<DeleteBooks/>}/>
      <Route path='/viewall' element={<ViewBooks/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
