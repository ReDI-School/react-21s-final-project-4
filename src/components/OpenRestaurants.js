import { Grid } from "@material-ui/core";
import React from "react";

import RenderRestaurants from "./RenderRestaurants";


function OpenRestaurants(props){
    
    const openRes = props.restaurants.filter(res => res.opening_hours.open_now === true);
    
    return(
        <Grid item container spacing={5}>
            <RenderRestaurants restaurants={openRes}/>
        </Grid>
    );
    
   
}

export default OpenRestaurants;