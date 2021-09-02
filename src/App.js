import { Grid } from '@material-ui/core';
import { useState } from 'react';
import './App.css';
import MediaCard from './components/card/card';
import SwipeableTemporaryDrawer from './components/drawer/drawer';
import Navbar from './components/navbar/navbar';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import getRequest from './services/filmeService.js'
import DrawerData from './components/drawerData/drawerData';



const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const movie = {
  CreatedAt: String,
  estoque: Number,
  imagem: String,
  nota: Number,
  sinopse: String,
  titulo: String,
  __v: Number

}

function App() {

  var movieObjectArray  = getRequest('/lista');

  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);
  const [drawerInfo, showInfo] = useState(false);

  const [movieObjectInUse, setMovieObject] = useState(movie);

  

  

  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Navbar setOpenDrawer={setOpenDrawer} openDrawer={openDrawer}/>
      <SwipeableTemporaryDrawer setOpenDrawer={setOpenDrawer} openDrawer={openDrawer}/>

      <DrawerData showInfo={showInfo} drawerInfo={drawerInfo} movieObjectInUse={movieObjectInUse} ></DrawerData>

      <Grid container spacing={1} style={{marginTop: '4px'}}>
        {movieObjectArray.map((cardItem) => (
          <Grid item xs={3}>
            <MediaCard showInfo={showInfo} setMovieObject={setMovieObject} cardItem={cardItem}></MediaCard>
          </Grid> 
        ))}
      </Grid>
    </div>
  );
}

export default App;
