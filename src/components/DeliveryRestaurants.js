import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { FilterRenderContext } from '../contexts/FilterRenderProvider';
import RenderRestaurants from "./RenderRestaurants";
import Map from './Map';


function DeliveryRestaurants(props){
    
    const deliveryRes = props.restaurants.filter(res => res.delivery === true);
    const [isMap]=useContext(FilterRenderContext);
    
    return(
        <Grid container>
        {!isMap 
        ?<Grid item container spacing={5}>
            <RenderRestaurants restaurants={deliveryRes}/>
        </Grid>
        :<Grid item container>
            
              <Grid item xs={10} ><Map restaurants={deliveryRes}/></Grid>
              
            </Grid>
        }
    </Grid>
    );
}

export default DeliveryRestaurants;