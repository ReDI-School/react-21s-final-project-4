import { Grid } from "@material-ui/core";
import React from "react";

import RenderRestaurants from "./RenderRestaurants";


function PickupRestaurants(props){
    
    const pickupRes = props.restaurants.filter(res => res.pickup === true);
    
    return(
        <Grid item container spacing={5}>
            <RenderRestaurants restaurants={pickupRes} />
        </Grid>
    );
}

export default PickupRestaurants;