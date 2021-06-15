import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { FilterRenderContext } from '../contexts/FilterRenderProvider';
import RenderRestaurants from "./RenderRestaurants";
import Map from './Map';

function AllRestaurants(props){
    
    const restaurants = props.restaurants;
    const [isMap]=useContext(FilterRenderContext);
    
    return(
        <Grid container>
        {!isMap 
        ?<Grid item container spacing={2}>
            <RenderRestaurants restaurants={restaurants}/>
        </Grid>
        :<Grid item container >
            
              <Grid item xs={10} ><Map restaurants={restaurants}/></Grid>
              
            </Grid>
        }
    </Grid>
    );
}

export default AllRestaurants;