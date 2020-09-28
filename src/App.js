import React from 'react';
import background from "./background.jpg";
import './App.scss';
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="page" style={{backgroundImage: `url(${background})`}}>
            <div className="container">
                <Intro/>
                <Projects/>
                <About/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
