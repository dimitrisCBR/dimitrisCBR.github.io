import React from "react";
import { Typography, Grid, Avatar, Paper, CardActionArea, CardContent } from '@material-ui/core';
import "./Commons.css"
import "./GithubProject.css"
import { Container } from "react-bootstrap";
import StarIcon from '@mui/icons-material/Star';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        height: 200,
    },
}));

const GithubProject2 = ({ project }) => {

    const classes = useStyles();

    return (
        <Grid item xs={12} sm={12} md={4} key={project.id}>
            <Paper variant="outlined" className={classes.paper}>
                <CardActionArea href={project.html_url} className={classes.paper}>
                    <CardContent>
                        <Container style={{ display: 'flex', flexDirection: 'column' }}>
                            <Container style={{ display: 'flex', flexDirection: 'row' }}>
                                <Avatar
                                    src={project.owner.avatar_url}
                                    style={{ width: 50, height: 50, margin: 10 }} />

                                <Container style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {project.name}
                                    </Typography>
                                    <Typography variant="subtitle" component="p" sx={{
                                        display: '-webkit-box',
                                        overflow: 'hidden',
                                        maxWidth: '300',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 3,
                                    }}>  {project.description}
                                    </Typography>
                                </Container>
                            </Container>
                            <Container style={{ display: 'flex', flexDirection: 'row'}} >
                                <StarIcon />
                                <Typography variant="h5">
                                    {project.forks_count}
                                </Typography>
                                <AltRouteIcon style={{ marginLeft: '20' }} />
                                <Typography variant="h5">
                                    {project.forks_count}
                                </Typography>
                            </Container>
                        </Container>
                    </CardContent>
                </CardActionArea>
            </Paper>
        </Grid>
    );
};

export default GithubProject2;