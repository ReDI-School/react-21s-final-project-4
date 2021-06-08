import { Grid } from "@material-ui/core";
import React from "react";

import RenderRestaurants from "./RenderRestaurants";


function AllRestaurants(props){
    
    const restaurants = props.restaurants;
    
    
    return(
        <Grid item container spacing={5}>
            <RenderRestaurants restaurants={restaurants}/>
        </Grid>
    );
}

export default AllRestaurants;