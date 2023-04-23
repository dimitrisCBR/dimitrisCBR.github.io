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
  height : 50, 
  width : 50
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
    <Grid container spacing={2} style={{ margin: 20 }}>
      {icons.map((item, index) => (
        <Grid key={index} item xs={3}>
          {item.icon}<p>{item.name}</p>
        </Grid>
      ))}
    </Grid>
  );
};

export default TechIconGrid;
