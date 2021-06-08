import { Grid } from "@material-ui/core";
import React from "react";

import RenderRestaurants from "./RenderRestaurants";


function DeliveryRestaurants(props){
    
    const deliveryRes = props.restaurants.filter(res => res.delivery === true);
    
    return(
        <Grid item container spacing={5}>
            <RenderRestaurants restaurants={deliveryRes} />
        </Grid>
    );
}

export default DeliveryRestaurants;