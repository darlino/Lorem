import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import simbcoin from '../assets/simbcoin.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    
  },
  text:{
    fontFamily:"Nunito",
    fontWeight:"bold",
    color:"black"
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" className={classes.text} >
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.text} style={{ textAlign:"justify"}}>
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
}