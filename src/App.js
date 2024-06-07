import logo from './logo.svg';
import './App.css';
import AddBooks from './components/AddBooks';
import SearchBooks from './components/SearchBooks';
import DeleteBooks from './components/DeleteBooks';

function App() {
  return (
    <div>
      <AddBooks/>
      <SearchBooks/>
      <DeleteBooks/>
    </div>
  );
}

export default App;
