import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Typography, Box, useTheme } from '@mui/material';
import { Avatar } from '@mui/material';
import LaptopIcon from '@mui/icons-material/Laptop';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import MaterialThemeSwitcher from "./ThemeSwitcher";
import "./Commons.css";

const Header = ({ toggleCallback, isDarkDefault }) => {
  const theme = useTheme();
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const maxScroll = window.innerHeight * (7 / 10);
      const opacity = scrollPosition / maxScroll;
      if (scrollPosition <= maxScroll) {
        setScrollOpacity(1 - opacity);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box component="div" className="section full-height">
      <Box
        component="div"
        className="center"
        sx={{ opacity: scrollOpacity, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Avatar
          alt="CBR"
          src="https://avatars.githubusercontent.com/u/12274068?v=4"
          sx={{ width: 100, height: 100, margin: 2 }}
        />
        <Box
          component="div"
          sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}
        >
          <LaptopIcon sx={{ fontSize: 50, marginBottom: 1 }} />
          <Typography variant="h3" component="h1">
            CBR Labs
          </Typography>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h5" component="h2">
            <Typewriter
              options={{
                strings: ['Full Stack Development', 'Software solutions'],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
              }}
            />
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}
        >
          <a href="https://github.com/dimitrisCBR" style={{ color: 'inherit' }}>
            <FontAwesomeIcon icon={faGithub} size="2x" className="fa" />
          </a>
          <a href="https://www.linkedin.com/in/dtsigouris/" style={{ color: 'inherit' }}>
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="fa" />
          </a>
          <a href="mailto:dimitsigou@gmail.com?subject=Hey" style={{ color: 'inherit' }}>
            <FontAwesomeIcon icon={faGoogle} size="2x" className="fa" />
          </a>
        </Box>
        <Box
          component="div"
          sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}
        >
          <MaterialThemeSwitcher checked={isDarkDefault} onChange={toggleCallback} />
        </Box>
      </Box>
      <Box
        component="div"
        className="bottom"
        sx={{ opacity: scrollOpacity, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Box
          component="div"
          sx={{ marginTop: 2, display: 'flex', alignItems: 'center' }}
        >
          <ArrowDownwardIcon sx={{ fontSize: 50, marginRight: 1 }} />
          <Typography variant="h4" component="h2">
            About
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;