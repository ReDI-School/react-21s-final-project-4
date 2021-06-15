import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { FilterRenderContext } from '../contexts/FilterRenderProvider';
import RenderRestaurants from "./RenderRestaurants";
import Map from './Map';




function PickupRestaurants(props){
    
    const pickupRes = props.restaurants.filter(res => res.pickup === true);
    const [isMap]=useContext(FilterRenderContext);
    
    return(
        <Grid container>
        {!isMap 
        ?<Grid item container spacing={5}>
            <RenderRestaurants restaurants={pickupRes}/>
        </Grid>
        :<Grid item container>
            
              <Grid item xs={10} ><Map restaurants={pickupRes}/></Grid>
              
            </Grid>
        }
    </Grid>
    );
}

export default PickupRestaurants;