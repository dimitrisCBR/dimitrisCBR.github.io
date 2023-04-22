import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { Code, Devices, SettingsRemote } from '@material-ui/icons';
import "./Commons.css"

const useStyles = makeStyles(theme => ({
  aboutPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(4),
  },
  aboutSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5)
  },
  aboutAvatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginRight: theme.spacing(4),
  },
  aboutTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  techSkills: {
    display: 'flex',
    alignItems: 'center',
  },
  techSkillsTitle: {
    fontWeight: 'bold',
    marginRight: theme.spacing(2),
  },
  techSkillsList: {
    display: 'flex',
  },
  techSkillsListItem: {
    marginRight: theme.spacing(2),
  },
}));


const About = () => {

  const classes = useStyles();

  const ref = useRef(null);
  const [componentHeight, setHeight] = useState(window.innerHeight);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const wh = componentHeight;
      var opacity = 0;
      if (scrollPosition <= wh) {
        opacity = scrollPosition / (wh * 0.7);
      } else if (scrollPosition > wh && scrollPosition <= (wh * 2)) {
        opacity = 1 - (scrollPosition - wh) / (wh * 0.7)
      } else {
        opacity = 0
      }
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return (
    <div className="section" style={{ opacity: scrollOpacity }}>
      <div className="center">
        <div className={classes.aboutPage} >
          <div className={classes.aboutSection}>
            <Avatar className={classes.aboutAvatar} alt="Profile" src="https://avatars.githubusercontent.com/u/12274068?v=4" />
            <div style={{ width: '80%%' }}>
              <Typography variant="h2" component="h2">
                <span role="img" aria-label="wave" style={{ margin: 10 }}>👋</span>
                Hi, we are CBR
              </Typography>
              <Typography variant="subtitle1" style={{ margin: 20 }}>We are a full-stack development & design team based in Athens Greece who loves to make apps.
                <br/>Web, mobile or REST APIs and third-party integrations. We deliver quality</Typography>
            </div>
          </div>
          <Typography variant="h5" className={classes.techSkillsTitle}>Tech Skills</Typography>
          <div className={classes.techSkills}>
            <List className={classes.techSkillsList}>
              <ListItem className={classes.techSkillsListItem}>
                <ListItemAvatar><Devices /></ListItemAvatar>
                <ListItemText primary="Web Development" />
              </ListItem>
              <ListItem className={classes.techSkillsListItem}>
                <ListItemAvatar><Code /></ListItemAvatar>
                <ListItemText primary="Mobile Development" />
              </ListItem>
              <ListItem className={classes.techSkillsListItem}>
                <ListItemAvatar><SettingsRemote /></ListItemAvatar>
                <ListItemText primary="API Development" />
              </ListItem>
            </List>
          </div>
        </div>

      </div>


    </div>
  );
};

export default About;
