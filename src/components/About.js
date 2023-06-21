import React, { useState, useEffect, useRef } from "react";
import { makeStyles, useTheme } from '@material-ui/core';
import { Typography, Grid, Link } from '@material-ui/core';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import WebIcon from '@mui/icons-material/Web';
import ApiIcon from '@mui/icons-material/Api';
import TechIconGrid from "./TechIconGrid";
import "./Commons.css"

const useStyles = makeStyles(theme => ({
  aboutPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutSection: {
    display: 'flex',
    marginBottom: theme.spacing(4),
  },
  aboutAvatar: {
    marginRight: theme.spacing(4),
  },
  aboutTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  techSkillsTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    margin: 10
  },
  techSkillItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  techSkillIcon: {
    marginRight: theme.spacing(1),
  },
}));


const About = () => {
  const classes = useStyles();
  const ref = useRef(null);
  const theme = useTheme();

  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const wh = ref.current.clientHeight;
      let opacity = 1;

      if (scrollPosition <= wh) {
        opacity = scrollPosition / (wh * 0.7);
      } else if (scrollPosition > wh && scrollPosition <= wh * 2) {
        opacity = 1 - (scrollPosition - wh) / (wh * 0.7);
      } else {
        opacity = 0;
      }

      setScrollOpacity(opacity);
    };

    // window.addEventListener("scroll", handleScroll);

    return () => {
      // window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="section" style={{ opacity: scrollOpacity }}>
      <div className="center">
        <div className={classes.aboutPage} ref={ref}>
          <div className={classes.aboutSection}>
            <div className={classes.container}>
              <Typography variant="h2" component="h2">
                <span role="img" aria-label="wave" style={{ marginRight: 10 }}>👋</span>
                Hi, I am dimitris CBR
              </Typography>
              <Typography variant="subtitle1" style={{ margin: 20 }}>I am a full-stack developer based in Athens Greece.<span role="img" aria-label="greece">📍🇬🇷</span>
                <br />I make apps and currently work with <Link href="https://www.futurae.com/">Futurae</Link>
              </Typography>
            </div>
          </div>
          <Typography variant="h5" className={classes.techSkillsTitle}>Tech Skills</Typography>
          <div className={classes.container}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <div className={classes.techSkillItem}>
                  <MobileFriendlyIcon className={classes.techSkillIcon} />
                  <Typography>Mobile</Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className={classes.techSkillItem}>
                  <WebIcon className={classes.techSkillIcon} />
                  <Typography>Web</Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className={classes.techSkillItem}>
                  <ApiIcon className={classes.techSkillIcon} />
                  <Typography>API</Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={classes.container} style={{ flexDirection: 'column', display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" className={classes.techSkillsTitle}>Frameworks & Languages</Typography>
            <TechIconGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
