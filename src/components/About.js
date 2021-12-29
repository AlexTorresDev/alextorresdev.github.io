import React from "react";
import "./About.scss"
import Typography from "@material-ui/core/Typography";
// import { Button, withStyles } from "@material-ui/core";

class About extends React.Component {
    render() {
        /* const ColorButton = withStyles(() => ({
            root: {
                backgroundColor: '#16825a',
                '&:hover': {
                    backgroundColor: '#39b788',
                },
            },
        }))(Button); */

        return <div className="about">
            <Typography className="title" variant="h4" component="h1">
                👨🏻‍💻 Sobre mi
            </Typography>
            <Typography gutterBottom variant="h6" component="h1">
                Soy una persona a la que le gusta investigar, aprender y enseñar sobre cosas nuevas de tecnología,
                internet de las cosas, inteligencia artificial, seguridad informática y lenguajes de programación.
                Utilizo frameworks como Angular, Spring Boot y
                Flutter. He manejado diferentes lenguajes de programación como <b>C++, Java, Javascript, Typescript,
                    entre otros</b>. Bases de datos como <b>Oracle, MySQL, PostgreSQL y MongoDB</b>.
            </Typography>
            <Typography gutterBottom variant="h6" component="h1">
                Puedes ver aquí abajo una lista de mis proyectos.
            </Typography>
        </div>
    }
}

export default About;
