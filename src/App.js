import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className="App">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Meme darkMode={darkMode} />
    </div>
  );
}
