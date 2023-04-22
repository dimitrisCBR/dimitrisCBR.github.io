import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    paper: {
      height: 100,
      width: 150,
      textAlign: 'center',
      padding: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }));
  
  function GridExample() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={2}
          align="center">
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>Grid item 1</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>Grid item 2</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

export default GridExample;
