import React, { useState, useEffect } from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import GithubProject from './GithubProject';

const useStyles = makeStyles((theme) => ({
  projects: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  projectContainer: {
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(10),
  },
}));

const Projects = () => {
  const theme = useTheme();
  const [projects, setProjects] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchProjectInfo = async () => {
      const repoUrls = [
        'https://api.github.com/repos/dimitrisCBR/GradientTextView',
        'https://api.github.com/repos/dimitrisCBR/Kotlin-Gallery',
        'https://api.github.com/repos/dimitrisCBR/BehanceSampleApp',
        'https://api.github.com/repos/dimitrisCBR/AnimatedLoadingText',
      ];
      const requests = repoUrls.map((url) => fetch(url));
      const responses = await Promise.all(requests);
      const data = await Promise.all(responses.map((response) => response.json()));
      setProjects(data);
    };

    fetchProjectInfo();
  }, []);

  return (
    <div className={classes.projects}>
      <Container id="projects" maxWidth="md" className={classes.projectContainer}>
        <Typography variant="h2" component="h2" className={classes.heading}>
          Projects
        </Typography>
        <Grid container spacing={5}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={6} key={project.id}>
              <GithubProject project={project} themeConfig={theme} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
