import React from "react";
import "./Intro.scss"
import Typography from "@material-ui/core/Typography";

class Intro extends React.Component {
    render() {
        return <div className="intro">
            <Typography gutterBottom variant="h4" component="h1">
                Hola <span role="img" aria-label="hello">👋</span><br />
                Mi nombre es Alex Torres
            </Typography>
            <Typography variant="h5">
                Soy desarrollador full-stack <span role="img" aria-label="web">💻</span> y desarrollador
                móvil <span role="img" aria-label="mobile">📱</span>
            </Typography>
        </div>
    }
}

export default Intro;
