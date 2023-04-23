import React from "react";
import { Typography, Grid, Avatar, Paper, CardActionArea, CardContent } from '@material-ui/core';
import "./Commons.css"
import "./GithubProject.css"
import { Container } from "react-bootstrap";
import StarIcon from '@mui/icons-material/Star';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        height: 200,
    },
    infoItem: {
        margin: 10,
    },
}));

const GithubProject = ({ project }) => {

    const classes = useStyles();
    const theme = useTheme();
    return (
        <Grid item xs={12} sm={12} md={4}>
            <Paper variant="outlined" className={classes.paper}>
                <CardActionArea href={project.html_url} className={classes.paper}>
                    <CardContent>
                        <Container style={{ display: 'flex', flexDirection: 'column' }}>
                            <Container style={{ display: 'flex', flexDirection: 'row' }} >
                                <Typography gutterBottom variant="h5" component="h2">
                                    {project.name}
                                </Typography>
                            </Container>
                            <Container style={{ display: 'flex', flexDirection: 'row', height: 80 }} >
                                <Typography component="p" align="left" className={classes.text} sx={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 3,
                                }}>  {project.description}
                                </Typography>
                            </Container>

                            <Container style={{ display: 'flex', flexDirection: 'row', marginTop: 10, alignItems: 'center', justifyContent: 'flex-start' }} >
                                <Avatar
                                    src={project.owner.avatar_url}
                                    className={classes.infoItem}
                                    style={{ width: 30, height: 30 }} />
                                <StarIcon />
                                <Typography variant="subtitle1">
                                    {project.forks_count}
                                </Typography>
                                <AltRouteIcon style={{ marginLeft: '20' }} />
                                <Typography variant="subtitle1">
                                    {project.forks_count}
                                </Typography>
                                <Typography variant="subtitle1" className={classes.infoItem}>
                                    Language:
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">
                                    {project.language}
                                </Typography>
                            </Container>
                        </Container>
                    </CardContent>
                </CardActionArea>
            </Paper>
        </Grid>
    );
};

export default GithubProject;