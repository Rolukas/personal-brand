import React, { useContext } from "react";
// Components
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// API
import AppContext from "../../../utils/context";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Certificates() {
  const state = useContext(AppContext);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container style={{ textAlign: "center" }}>
      <Grid item xs={12}>
        <h1 className="experience_title" style={{ margin: "30px" }}>
          CERTIFICATES
        </h1>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {state.data?.certificates.map((certificate, index) => {
            return (
              <Grid item xs={12} md={4} key={index}>
                <Card className={classes.root} variant="outlined">
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      {certificate.type}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {certificate.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {certificate.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Certificates;
