import React from "react";
import { Grid } from "@material-ui/core";
import {
  SiKotlin,
  SiFlutter,
  SiSpring,
  SiGo,
  SiMaterialdesign,
  SiSqlite,
} from "react-icons/si";
import { FaJava, FaApple, FaNodeJs, FaAndroid, FaReact, FaHtml5 } from "react-icons/fa"

const iconStyle = {
  height : 30, 
  width : 30
}

const TechIconGrid = () => {
  const icons = [
    { name: "Kotlin", icon: <SiKotlin style={iconStyle}/> },
    { name: "Java", icon: <FaJava style={iconStyle}/> },
    { name: "Android", icon: <FaAndroid style={iconStyle}/> },
    { name: "iOS", icon: <FaApple style={iconStyle}/> },
    { name: "Flutter/Dart", icon: <SiFlutter style={iconStyle}/> },
    { name: "Spring", icon: <SiSpring style={iconStyle}/> },
    { name: "React JS", icon: <FaReact style={iconStyle}/> },
    { name: "Node JS", icon: <FaNodeJs style={iconStyle}/> },
    { name: "HTML", icon: <FaHtml5 style={iconStyle}/> },
    { name: "Go", icon: <SiGo style={iconStyle}/> },
    { name: "Material Design", icon: <SiMaterialdesign style={iconStyle}/> },
    { name: "SQL", icon: <SiSqlite style={iconStyle}/> },
  ];

  return (
    <Grid container spacing={1} style={{ margin: 20 }} justifyContent="center" alignItems="center">
      {icons.map((item, index) => (
        <Grid key={index} item xs={6} sm={4} md={3} lg={2}>
          <div style={{ textAlign: 'center' }}>
            {item.icon}
            <p>{item.name}</p>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default TechIconGrid;
