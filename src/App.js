import React from 'react';
import './App.css';
import { Navigation } from './Components/Navigation';
import { Content } from './Components/Content';
import { Contacts } from './Components/Contacts';
import { Footer } from './Components/Footer';


function App() {
  return (
    <div>
      <Navigation />
      <Content />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
