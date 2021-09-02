import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import stars from '../../util/note';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    root: {
        maxWidth: 345,
      },
      media: {
        height: 600,
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
      }
  });

export default function drawerData({showInfo,drawerInfo,movieObjectInUse}) {
    
    

    console.log(movieObjectInUse.imagem);
    return (
        <div>
            <SwipeableDrawer
            anchor='right'
            onClose={() => {showInfo(false)}}
            
            open={drawerInfo}
            >
                <CardMedia
                    style={{height: 600, width: 400}}
                    image={movieObjectInUse.imagem}
                    title={movieObjectInUse.titulo}
                />
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {movieObjectInUse.titulo}
                    </Typography>
                    <Typography>
                        Avaliação: {stars(movieObjectInUse.nota)}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        Sinopse: <p>{movieObjectInUse.sinopse}</p>
                    </Typography>
                    
                </CardContent>

            </SwipeableDrawer> 
            
        </div>
    )
}
