import React from "react";
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Home from './Home';
import Tile from './Tile';
import { tiles } from '../tiles';

function App(){
    return (
        <div>
        <Header />
        <Home />
        {/* <Tile /> */}
        {tiles.map((tile, index) => (
        <Tile key={index} title={tile} />
      ))}
        <Contact />
        <Footer />
        </div>
    )
}

export default App;