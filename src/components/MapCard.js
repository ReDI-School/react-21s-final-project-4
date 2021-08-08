import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ReactStars from 'react-rating-stars-component';
const useStyles = makeStyles({
  root: {
    width: 280,
    maxHeight: 300,
  },
  media: {
    height: 100,
  },
});

function MapCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='h6'>
            <div className='Card-map--name'>{props.name}</div>
          </Typography>

          <Typography variant='body2' color='textSecondary' component='p'>
            <div className='rating-container'>
              <span className='Card-map--rating'>{props.rating + ' '}</span>

              <span className='Card-map--stars'>
                <ReactStars
                  className='Card-map--stars'
                  value={props.rating}
                  edit={false}
                  isHalf={true}
                />
              </span>

              <span className='Card-map--raters'> ({props.usrs})</span>
            </div>
          </Typography>

          <Typography
            gutterBottom
            variant='body2'
            color='textSecondary'
            component='p'
          >
            <div className='Card-map--type'>
              {props.cuisine} {props.type}
            </div>
          </Typography>
          <div className='Card-map--hours'>
            {props.open ? (
              <li className='Card-map--hours open'>
                Open until {props.closeHour}
              </li>
            ) : (
              <div>
                <li className='Card-map--hours card-res--name close'>Closed</li>
                <li className='Card-map--hours open'>
                  Openes at {props.openHour}
                </li>
              </div>
            )}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MapCard;
