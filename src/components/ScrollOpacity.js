import React, { useState, useEffect } from "react";
import "./Header.css";

function ScrollOpacity() {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const opacity = scrollPosition / maxScroll;
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container" style={{ opacity: scrollOpacity }}>
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        scelerisque ornare velit, vel ullamcorper odio ultrices ac. Proin sit
        amet purus nec nibh bibendum euismod. Nam at tortor at nulla consequat
        lobortis vel eu magna. Donec dictum tincidunt nulla, quis tristique ex
        efficitur vel.
      </p>
    </div>
  );
}

export default ScrollOpacity;