import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import stars from '../../util/note';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 760,
    maxHeight: 760,
  },
  media: {
    height: 600,
  },
});

export default function MediaCard({img, cardItem, showInfo, setMovieObject}) {
  const classes = useStyles();
  
  function openDrawerInfo() {
    showInfo(true);
    setMovieObject(cardItem);
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => openDrawerInfo()}>
        <CardMedia
          className={classes.media}
          image={cardItem.imagem}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cardItem.titulo}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div style={{flex: 'auto'}}></div>
      <CardActions>
        <Button size="small" color="primary">
          Comprar
        </Button>
        <Button size="small" color="primary">
          Avaliar
        </Button>
      </CardActions>
    </Card>
  );
}