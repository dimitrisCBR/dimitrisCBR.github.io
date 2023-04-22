import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Container } from 'react-bootstrap';
import { Avatar, Typography } from '@mui/material';
import LaptopIcon from '@mui/icons-material/Laptop';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MaterialThemeSwitcher from "./ThemeSwitcher";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons'
import "./Commons.css"


const Header = ({darkMode}) => {

    const [theme, setTheme] = useState(darkMode);

    const handleToggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const themeConfig = createTheme({
        palette: {
            mode: theme,
        }
    });


    const [scrollOpacity, setScrollOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const maxScroll = window.innerHeight * (7/10);
            const opacity = scrollPosition / maxScroll;    
            if(scrollPosition <= maxScroll) {
                setScrollOpacity(1-opacity);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <ThemeProvider theme={themeConfig}>
            <CssBaseline enableColorScheme >
                <div className="section">
                    <div className="center" style = {{ opacity: scrollOpacity}}>
                        <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Avatar
                                alt="CBR"
                                src="https://avatars.githubusercontent.com/u/12274068?v=4"
                                style={{ width: 100, height: 100, margin: 10 }} />

                        </Container>
                        <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <LaptopIcon style={{ marginBottom: 8, marginRight: 16 }} sx={{ fontSize: 50 }} />
                            <Typography variant="h3" >
                                CBR Labs
                            </Typography>
                        </Container>
                        <Container style={{ marginTop: 20 }}>
                            <Typography variant="h5" component="h2">
                                <Typewriter
                                    options={{
                                        strings: [
                                            'Full Stack Development',
                                            'Software engineer',
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 10,
                                    }}
                                />
                            </Typography>
                        </Container>
                        <Container style={{ marginTop: 20 }}>
                            <a href="https://github.com/dimitrisCBR" style={{color:themeConfig.palette.text.primary}}>
                                <FontAwesomeIcon icon={faGithub} size="2x" className="fa" />
                            </a>
                            <a href="https://www.linkedin.com/in/dtsigouris/" style={{color:themeConfig.palette.text.primary}}>
                                <FontAwesomeIcon icon={faLinkedin} size="2x" className="fa" />
                            </a>
                            <a href="mailto:dimitsigou@gmail.com?subject=Hey" style={{color:themeConfig.palette.text.primary}}>
                                <FontAwesomeIcon icon={faGoogle} size="2x" className="fa"/>
                            </a>
                        </Container>
                        <Container style={{ margin: 20 }}>
                            <MaterialThemeSwitcher checked={theme === 'dark'} onChange={handleToggleTheme} />
                        </Container>
                    </div>
                    <div className="bottom" style = {{ opacity: scrollOpacity}}>
                        <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                            <ArrowDownwardIcon style={{ marginRight: 16 }} sx={{ fontSize: 50 }} />
                            <Typography variant="h4" >
                                About
                            </Typography>
                        </Container>
                    </div>
                </div>

            </CssBaseline>
        </ThemeProvider>
    );
};

export default Header;