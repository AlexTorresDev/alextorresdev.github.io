import React from "react";
import "./About.scss"
import Typography from "@material-ui/core/Typography";
import { Button, withStyles } from "@material-ui/core";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import Twemoji from "react-twemoji";

class About extends React.Component {
    render() {
        const ColorButton = withStyles(() => ({
            root: {
                backgroundColor: '#16825a',
                '&:hover': {
                    backgroundColor: '#39b788',
                },
            },
        }))(Button);

        return <div className="about">
            <Typography className="title" variant="h4" component="h1">
                <Twemoji className="twemoji"><span role="img" aria-label="adn">👨🏻‍💻</span> Sobre mi</Twemoji>
            </Typography>
            <Typography gutterBottom variant="h6" component="h1">
                Soy una persona a la que le gusta investigar, aprender y enseñar sobre cosas nuevas de tecnología,
                internet de las cosas, inteligencia artificial, seguridad informática y lenguajes de programación.
                Uso frameworks como Angular, Spring Boot y
                Flutter. He manejado diferentes lenguajes de programación como <b>C++, Java, Javascript, Typescript,
                entre otros</b>. Bases de datos como <b>Oracle, MySQL, PostgreSQL y MongoDB</b>.
            </Typography>
            <Typography gutterBottom variant="h6" component="h1">
                Actualmente me encuentro trabajando en varios proyectos móviles usando el Framework <b>Flutter</b> y en
                algunos proyectos
                web con <b>Angular</b>. También estoy aprendiendo <b>React y NodeJS</b>.
            </Typography>
            <Twemoji className="twemoji" options={{ className: 'mini' }}>
                Puedes darme un saludo a <a href="/twitter">@AlexTorresSk</a> o dar algunos <span role="img"
                    aria-label="heart">♥</span> por
                correo.
            </Twemoji>
            <div className="button-container">
                <ColorButton href="https://www.buymeacoffee.com/bjkGN4g" variant="contained" color="primary"
                    startIcon={<EmojiFoodBeverageIcon />}>
                    Comprame un café
                </ColorButton>
            </div>
        </div>
    }
}

export default About;
