import React from 'react';
import '../styles/components/App.styl';
// Components
import Grid from '@material-ui/core/Grid';
import Certificates from '../containers/components/Certificates';
import Experience from '../containers/components/Experience';
import Header from '../containers/components/Header';
import Interests from '../containers/components/Interests';
import Languages from '../containers/components/Languages';
import PersonalInfo from '../containers/components/PersonalInfo';
import Resume from '../containers/components/Resume';
import Skills from '../containers/components/Skills';
// Context
import useData from '../functions/useData';
import AppContext from '../utils/context';


const App = () => {

  const data = useData();
  console.log(data);

  return (
    <AppContext.Provider value={data}>
      <Header/>
      <div style={{marginLeft: '10%', marginRight: '10%'}}>
        <Experience/>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Skills/>
          </Grid>
          <Grid item xs={12} md={6}>
            <Resume/>
          </Grid>
        </Grid>
        <Certificates/>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Languages/>
          </Grid>
          <Grid item xs={12} md={6}>
            <PersonalInfo/>
          </Grid>
        </Grid>
        <Interests/>
      </div>
    </AppContext.Provider>
  )
}; 

export default App;
