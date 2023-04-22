import React from "react";
import { Typography, Card, CardContent, Grid, Avatar, CardActionArea } from '@material-ui/core';
import "./Commons.css"
import "./GithubProject.css"
import { Container } from "react-bootstrap";
import StarIcon from '@mui/icons-material/Star';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    paper: {
      height: 200,
      width: 450,
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }));

const GithubProjectView = ({ project }) => {

    const classes = useStyles();

    return (
        <Grid item xs={12} md={6} key={project.id} alignItems="center">
            <Card variant="outlined" className={classes.paper}>
                <CardActionArea href={project.html_url} className={classes.paper}>
                    <CardContent>
                        <Container style={{ display: 'flex', flexDirection: 'column', height: '150', width: '300' }}>
                            <Container style={{ display: 'flex', flexDirection: 'row' }} alignItems="center">
                                <Avatar
                                    src={project.owner.avatar_url}
                                    style={{ width: 50, height: 50, margin: 10 }} />

                                <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                            <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
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
            </Card>
        </Grid>
    );
};

export default GithubProjectView;
