import React from "react";
import "./Footer.scss"
import Typography from "@material-ui/core/Typography";
import {GitHub, LinkedIn, Twitter} from '@material-ui/icons';
import Twemoji from "react-twemoji";

function Footer() {
    return (
        <div className="footer">
            <Typography className="title" variant="h4" component="h1">
                <Twemoji className="twemoji"><span role="img" aria-label="adn">📧</span> Contacto</Twemoji>
            </Typography>
            <div className="contact">
                <Typography variant="body1">
                    Puedes contactarme en: <b><a
                    href="mailto:contacto@alextorressk.com">contacto@alextorressk.com</a></b> o visitar mis redes
                    sociales.
                </Typography>
                <div className="social">
                    <a className="item" href="./twitter"><Twitter/></a>
                    <a className="item" href="./github"><GitHub/></a>
                    <a className="item" href="./linkedin"><LinkedIn/></a>
                </div>
            </div>
            <Typography className="attribution" variant="caption" component="h6">
                <Twemoji className="twemoji" options={{className: 'mini'}}>
                    Hecho con el <span role="img" aria-label="adn">♥</span> y <img className="mini"
                                                                                   src="./images/react.png"
                                                                                   alt="React"/> por Alex Torres<br/>
                    &copy; {new Date().getFullYear()} Todos los derechos reservados.
                </Twemoji>
            </Typography>
        </div>
    );
}

export default Footer;
