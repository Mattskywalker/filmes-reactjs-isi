import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  container: {
    display: 'flex',
  },
  iconSize: {
    fontSize: '100px'
  },
  titleContainer:{
    display:'flex', 
    flexWrap: 'wrap', 
    justifyContent: 'center',
    flexDirection:'column'
  },
  ticketIcon: {
        // height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px'

  },
  text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px'
  }
});

export default function SwipeableTemporaryDrawer({setOpenDrawer,openDrawer}) {
  const classes = useStyles();

  const list = () => (
    <div className={clsx(classes.list)} >
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <List>
        {[{text: 'Filmes', iconName: 'movie'},{text: 'Series', iconName: 'cameraroll'}].map((listObject) => (
          <ListItem button key={listObject.text}>
            <Icon>{listObject.iconName}</Icon>
            <ListItemText primary={listObject.text}/>
          </ListItem>
        ))}
        <Divider></Divider>
        <Typography style={{margin: 10}} >Administrador</Typography>
        {[{text: 'Adicionar item', iconName: 'manage_accounts'},{text: 'Series', iconName: 'cameraroll'}].map((listObject) => (
          <ListItem button key={listObject.text}>

              <div className={classes.container}>
                <div className={classes.ticketIcon}><Icon className={classes.ticketIcon}>{listObject.iconName}</Icon></div>
                <div className={classes.titleContainer}><ListItemText className={classes.text} primary={listObject.text}/></div>
              </div>

            
            
          </ListItem>
        ))}
      </List>
    </div>
  );




  return (
    <div>
        <SwipeableDrawer
        anchor='left'
        onClose={() => {setOpenDrawer(false)}}
        
        open={openDrawer}
        >
        {list()}
        </SwipeableDrawer> 
    </div>
  )

}
