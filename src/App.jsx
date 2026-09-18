import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wallet from './components/Wallet.js';
import AddCard from './views/AddCard.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Wallet />} />
          <Route path="/addcard" element={<AddCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
