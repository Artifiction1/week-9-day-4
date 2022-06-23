import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBookComponent';
import HorrorBooks from './data/horror.json'
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WarningSign text="Watch out!"/>
        <MyBadge text="new" color="info"/>
        <BookList Books={HorrorBooks}/>
      </header>
    </div>
  );
}

export default App;
