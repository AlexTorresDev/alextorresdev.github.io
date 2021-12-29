import React from 'react';
import './App.scss';
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

class App extends React.Component {
    render() {
        return <div className="page" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)` }}>
            <div className="container">
                <Intro />
                <About />
                <Projects />
                <Footer />
            </div>
        </div>
    }
}

export default App;
