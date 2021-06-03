import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      height: 320.85
    },
    media: {
      height: 140,
    },
  });

function ResCard(props){
    const classes = useStyles();
    
    return(
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={props.img}
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography gutterBottom variant="h6"  component="h3">
                        ({props.cuisine} {props.type})
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.address}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ResCard;