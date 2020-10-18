import React from "react";
import "./Intro.scss"
import Typography from "@material-ui/core/Typography";
import Twemoji from "react-twemoji";

function Intro() {
    return (
        <div className="intro">
            <Typography gutterBottom variant="h4" component="h1">
                <Twemoji className="twemoji">
                    Hola <span role="img" aria-label="hello">👋</span>. Mi nombre es Alex Torres
                </Twemoji>
            </Typography>
            <Typography variant="h5">
                <Twemoji className="twemoji" options={{className: 'mini'}}>
                    Soy desarrollador full-stack freelance <span role="img" aria-label="web">🖥</span> y desarrollador
                    móvil <span role="img" aria-label="mobile">📱</span>.
                </Twemoji>
            </Typography>
        </div>
    );
}

export default Intro;
