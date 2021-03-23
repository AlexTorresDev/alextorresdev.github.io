import React from "react";
import "./Footer.scss"
import Typography from "@material-ui/core/Typography";
import { GitHub, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import Twemoji from "react-twemoji";
import { SvgIcon } from '@material-ui/core';

const Blogger = (props) => {
    return (
        <SvgIcon {...props}>
            <path d="M12.5 10H10C9.45 10 9 9.55 9 9C9 8.45 9.45 8 10 8H12.5C13.05 8 13.5 8.45 13.5 9C13.5 9.55 13.05 10 12.5 10M15 14C15 13.45 14.55 13 14 13H10C9.45 13 9 13.45 9 14C9 14.55 9.45 15 10 15H14C14.55 15 15 14.55 15 14M22 4V20C22 21.11 21.11 22 20 22H4C2.89 22 2 21.11 2 20V4C2 2.89 2.89 2 4 2H20C21.11 2 22 2.89 22 4M18 12C18 12 18 11 17 11C16.05 11.03 16 10 16 10L16 8C16 6.34 14.66 5 13 5H9C7.34 5 6 6.34 6 8V15C6 16.66 7.34 18 9 18H15C16.66 18 18 16.66 18 15L18 12Z" />
        </SvgIcon>
    );
}

class Footer extends React.Component {
    render() {
        return <div className="footer">
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
                    <a className="item" href="./linkedin"><LinkedIn /></a>
                    <a className="item" href="./twitter"><Twitter /></a>
                    <a className="item" href="./github"><GitHub /></a>
                    <a className="item" href="./instagram"><Instagram /></a>
                    <a className="item" href="./blog"><Blogger /></a>
                </div>
            </div>
            <Typography className="attribution" variant="caption" component="h6">
                <Twemoji className="twemoji" options={{ className: 'mini' }}>
                    Hecho con el <span role="img" aria-label="adn">♥</span> y <img className="mini"
                        src={`${process.env.PUBLIC_URL}/images/react.png`}
                        alt="React" /> por Alex Torres<br />
                    &copy; {new Date().getFullYear()} Todos los derechos reservados.
                </Twemoji>
            </Typography>
        </div>
    }
}

export default Footer;
