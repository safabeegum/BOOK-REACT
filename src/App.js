import logo from './logo.svg';
import './App.css';
import AddBooks from './components/AddBooks';
import SearchBooks from './components/SearchBooks';
import DeleteBooks from './components/DeleteBooks';
import ViewBooks from './components/ViewBooks';

function App() {
  return (
    <div>
      <AddBooks/>
      <SearchBooks/>
      <DeleteBooks/>
      <ViewBooks/>
    </div>
  );
}

export default App;
