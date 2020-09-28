import React from "react";
import "./Projects.scss"
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Twemoji from "react-twemoji";

function Projects() {
    return (
        <div className="projects">
            <Typography className="title" variant="h4" component="h1">
                <Twemoji className="twemoji"><span role="img" aria-label="adn">🧬</span> Mis proyectos</Twemoji>
            </Typography>
            <div className="content">
                <Card className="item">
                    <CardActionArea href="./cet">
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Custom Electron Titlebar
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                Es una barra de título para ventanas creadas con electron similares a la barra de título
                                de VS Code. Es 100% personalizable en colores, iconos, fuentes, menu, etc.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="item">
                    <CardActionArea href="./pma">
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                PMA Material
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                Es un tema para phpMyAdmin el cual te permite cambiar el diseño y que parezca material
                                design.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}

export default Projects;
