import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
import { useTheme } from '@material-ui/core';
import { useCallback } from "react";

const ParticlesComponent = ({ isDarkMode }) => {
  const theme = useTheme();

  const options = {
    background: {
      color: isDarkMode
        ? theme.palette.background.dark
        : theme.palette.background.default,
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    interactivity: {
      events: {
        // onClick: {
        //   enable: true, // enables the click event
        //   mode: "push", // adds the particles on click
        // },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 10,
        },
        repulse: {
          distance: 100,
        },
      },
    },
    particles: {
      color: {
        value: "#4f4d4d",
      },
      links: {
        color: "#4f4d4d",
        enable: true,
        distance: 100,
      },
      move: {
        enable: true,
        speed: { min: 1, max: 5 },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: { min: 0.3, max: 0.7 },
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
  };

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesComponent;