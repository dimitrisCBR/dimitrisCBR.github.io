import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import GithubProject from './GithubProject';

const useStyles = makeStyles(theme => ({
  projects: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    alignContent: 'top',
    justifyContent: 'top',
  }
}));

const Projects = () => {

  const theme = useTheme();

  console.log(`Project theme palette type: ${JSON.stringify(theme.palette.type)}`)
  
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
      const requests = repoUrls.map(url => fetch(url));
      const responses = await Promise.all(requests);
      const data = await Promise.all(responses.map(response => response.json()));
      setProjects(data)
    };

    fetchProjectInfo()
  }, []);

  return (

    <div className={classes.projects}>
      <Container id="projects" className="py-5" style={{ marginLeft: 50, marginRight: 50 }}>
        <Row>
          <Col md={12} style={{ marginBottom: 50, marginTop: 50 }}>
            <Typography variant="h1" component="h1">
              Projects
            </Typography>
          </Col>
        </Row>
        <Row style={{ marginBottom: 50, marginTop: 100 }}>
          <Grid container spacing={5}>
            {projects.map((project) => (
              <GithubProject project={project} themeConfig={theme} key={project.id} />
            ))}
          </Grid>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;