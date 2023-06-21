import React from "react";
import { Typography, Grid, Avatar, Paper, CardActionArea, CardContent } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      height: 200,
      width: '100%', // Set the width to 100% to take up the entire horizontal space
      overflow: 'hidden',
    },
    infoItem: {
      margin: theme.spacing(1),
    },
    text: {
      display: '-webkit-box',
      overflow: 'hidden',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: 3,
      maxWidth: '100%',
    },
    alignBottom: {
        marginTop: 'auto', // Push the content to the bottom
      },
  }));
  
  const GithubProject = ({ project }) => {
    const classes = useStyles();
  
    return (
      <Grid item>
        <Paper variant="outlined" className={classes.paper} style={{ flex: 1 }}>
          <CardActionArea href={project.html_url} className={classes.paper}>
            <CardContent>
              <Grid container direction="column" style={{ height: '100%' }}>
                <Grid item>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.name}
                  </Typography>
                </Grid>
                <Grid item container direction="row" style={{ flex: 1 }}>
                  <Typography component="p" align="left" className={classes.text}>
                    {project.description}
                  </Typography>
                </Grid>
                <Grid item container alignItems="center" justifyContent="flex-start" className={classes.alignBottom}>
                  <Avatar src={project.owner.avatar_url} className={classes.infoItem} style={{ width: 30, height: 30 }} />
                  <StarIcon />
                  <Typography variant="subtitle1">{project.stargazers_count}</Typography>
                  <AltRouteIcon style={{ marginLeft: '20px' }} />
                  <Typography variant="subtitle1">{project.forks_count}</Typography>
                  <Typography variant="subtitle1" className={classes.infoItem}>
                    Language:
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {project.language}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Paper>
      </Grid>
    );
  };
  
  export default GithubProject;