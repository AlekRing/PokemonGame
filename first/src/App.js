import { useState } from 'react';
import './App.css';
import HomePage from './routes/Home';
import GamePage from './routes/Game';


const App = () => {
  const [page, setPage] = useState('home');

  const handleChengePage = (page) => {
    setPage(page)
  }

  switch(page) {
    case "home":
      return <HomePage onChangePage={handleChengePage}/>
    case "game":
      return <GamePage onChangePage={handleChengePage}/>
    default:
      return <HomePage />
  }
}

export default App;
