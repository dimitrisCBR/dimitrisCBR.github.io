import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GithubProjectView from './GithubProject';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GithubProject2 from './GithubProject2';

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
  const [projects, setProjects] = useState([]);

  const classes = useStyles();

  useEffect(() => {

    const fetchProjectInfo = async () => {
      const repoUrls = [
        'https://api.github.com/repos/dimitrisCBR/AnimatedLoadingText',
        'https://api.github.com/repos/dimitrisCBR/Kotlin-Gallery',
        'https://api.github.com/repos/dimitrisCBR/BehanceSampleApp',
      ];
      const requests = repoUrls.map(url => fetch(url));
      const responses = await Promise.all(requests);
      const data = await Promise.all(responses.map(response => response.json()));
      console.log(data); // or do something else with the data
      setProjects(data)
    };

    
    // const fetchProjects = async () => {
    //   const response = await fetch('https://api.github.com/users/dimitrisCBR/repos?per_page=4&type=public&language=&sort=stargazers');
    //   const data = await response.json();
    //   setProjects(data);
    // };
    
    // fetchProjects();

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
              <GithubProject2 project={project} />
            ))}
          </Grid>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;