import React from "react";
import "./Projects.scss"
import projects from "../projects.json";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Twemoji from "react-twemoji";

class Projects extends React.Component {
    render() {
        return <div className="projects">
            <Typography className="title" variant="h4" component="h1">
                <Twemoji className="twemoji"><span role="img" aria-label="adn">🧬</span> Mis proyectos</Twemoji>
            </Typography>
            <div className="content">
                {
                    projects.map((data, key) => {
                        return (
                            <Card className="item" key={key} style={{ background: data.background }}>
                                <CardActionArea href={data.link}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2"
                                            style={{ color: data.color }}>
                                            {data.name}
                                        </Typography>
                                        <Typography variant="body1" color="textSecondary" component="p"
                                            style={{ color: data.color }}>
                                            {data.desc}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        );
                    })
                }
            </div>
        </div>
    }
}

export default Projects;
