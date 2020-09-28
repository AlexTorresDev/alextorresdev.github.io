import React from "react";
import "./About.scss"
import Typography from "@material-ui/core/Typography";
import {Button, withStyles} from "@material-ui/core";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import Twemoji from "react-twemoji";

function About() {
    const ColorButton = withStyles((theme) => ({
        root: {
            backgroundColor: '#16825a',
            '&:hover': {
                backgroundColor: '#39b788',
            },
        },
    }))(Button);

    return (
        <div className="about">
            <Typography className="title" variant="h4" component="h1">
                <Twemoji className="twemoji"><span role="img" aria-label="adn">👨🏻‍💻</span> Sobre mi</Twemoji>
            </Typography>
            <Typography gutterBottom variant="h6" component="h1">
                Mi pasión es desarrollar e investigar sobre cosas nuevas de tecnología, internet de las cosas,
                inteligencia artificial, seguridad informática, entre otras.
            </Typography>
            <Typography variant="h6" component="h1">
                Actualmente me encuentro trabajando en varios proyectos móviles usando el Framework Flutter y en algunos
                web con Angular. Algunas de las cosas que estoy aprendiendo es React y GoLang.
            </Typography>
            <div className="button-container">
                <ColorButton  href="https://www.buymeacoffee.com/bjkGN4g" variant="contained" color="primary" startIcon={<EmojiFoodBeverageIcon/>}>
                    Comprame un café
                </ColorButton>
            </div>
        </div>
    );
}

export default About;
