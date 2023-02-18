
import React from 'react';
// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// Assets
import { greenMain } from '../../../utils/colors';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: greenMain}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Rolando Sumoza (Frontend Engineer) 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}