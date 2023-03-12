import './App.css';
import { Routes, Route } from 'react-router';
import BookList from './compnonets/BookList';
import BookDetails from './compnonets/BookDetails';
import Favourites from './compnonets/Favourites';
import Navbar from './compnonets/Navbar';
import Footer from './compnonets/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails/>} />
        <Route path="/favourites" element={<Favourites/>} />
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
