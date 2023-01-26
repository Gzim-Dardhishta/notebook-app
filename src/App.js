
import './App.css';
import AddNote from './Components/AddNotes/AddNote';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import FavoritesPage from './Components/NotesByCategory/FavoritesPage';
import CodingNotesPage from './Components/NotesByCategory/CodingNotesPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/addnote' element={<AddNote />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/codingnotes' element={<CodingNotesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
