import React, { useContext } from 'react';
// Components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import RepeatIcon from '@material-ui/icons/EmojiEmotions';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/School';
import FastfoodIcon from '@material-ui/icons/Smartphone';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
// API
import AppContext from '../../../utils/context';
// Assets
import '../../../styles/components/App.styl';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    }
}));

const icons = [
  <FastfoodIcon />,
  <LaptopMacIcon />,
  <HotelIcon />,
  <RepeatIcon />
]

function About(){

    const state = useContext(AppContext);
    const classes = useStyles();

    return(
        <Grid container style={{ textAlign: 'center' }}>
            <Grid item xs={12}>
              <h1 className="experience_title">
                EXPERIENCE &amp; ACADEMIC
              </h1> 
            </Grid>
            <Grid item xs={false} md={2}/>
            <Grid item xs={12} md={8}>
            <Timeline align="alternate">
              {
                state.data?.experience.map((experieceItem, index) => {
                  return(
                    <TimelineItem>
                      <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                          {`${experieceItem.startDate} - ${experieceItem.endDate}`}
                        </Typography>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot color="secondary">
                          {icons[index]}
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                          <Typography variant="h6" component="h1">
                          {`${experieceItem.jobTitle}`}
                          </Typography>
                          <Typography>{`${experieceItem.company}`}</Typography>
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                  )
                })
              }
              </Timeline>
            </Grid>
            <Grid item xs={false} md={2}/>
        </Grid>
    );
}

export default About;