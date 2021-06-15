import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { FilterRenderContext } from '../contexts/FilterRenderProvider';
import RenderRestaurants from "./RenderRestaurants";
import Map from './Map';


function OpenRestaurants(props){
    
    const openRes = props.restaurants.filter(res => res.opening_hours.open_now === true);
    const [isMap]=useContext(FilterRenderContext);
    return(
        <Grid container>
        {!isMap 
        ?<Grid item container spacing={5}>
            <RenderRestaurants restaurants={openRes}/>
        </Grid>
        :<Grid item container>
            
              <Grid item xs={10} ><Map restaurants={openRes}/></Grid>
              
            </Grid>
        }
    </Grid>
    );
    
   
}

export default OpenRestaurants;