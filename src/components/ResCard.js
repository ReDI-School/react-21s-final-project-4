import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 350,
      height: 321
    },
    media: {
      height: 140,
    },
  });

function ResCard(props){
    const classes = useStyles();
    
    return(
        <CardActionArea>
            <Card className={classes.root}>
                <CardMedia
                className={classes.media}
                image={props.img}
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h4">
                        <div className="Card-res--name">
                            {props.name}
                        </div>
                    </Typography>
                    <Typography gutterBottom variant="body1" color="textSecondary" component="h3">
                        <div className="Card-res--type">{props.cuisine} {props.type}</div>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    <div className="Card-res--address">{props.address}</div>
                    </Typography>
                    <div className="Card-res--ul">
                        {props.delivery && <li className="Card-res--list">Delivery</li>}
                        {props.pickup && <li className="Card-res--list">Pickup</li>}
                        {props.open ?<li className="Card-res--list open">Open</li>
                        :<li className="Card-res--list close" >Closed</li>}
                    </div>
                </CardContent>
            </Card>
        </CardActionArea>
    );
}

export default ResCard;