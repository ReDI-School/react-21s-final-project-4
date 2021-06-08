import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { FetchDataContext } from "../contexts/FetchDataProvider";
import { FilterDataContext } from '../contexts/FilterDataProvider';

import AllRestaurants from "./AllRestaurants";
import DeliveryRestaurants from './DeliveryRestaurants';
import PickupRestaurants from './PickupRestaurants';
import OpenRestaurants from './OpenRestaurants';


function Listing(){
    const restaurants = useContext(FetchDataContext);
    const [filters] = useContext(FilterDataContext);
        if(restaurants !== undefined)  {
            
            return(  
                <Grid  container>
                    {!filters.delivery && !filters.pickup && !filters.open &&
                        <Grid item container >
                            <AllRestaurants restaurants={restaurants}/>
                        </Grid>  
                    }
            
                    {filters.delivery && 
                        <Grid item container >
                            <DeliveryRestaurants restaurants={restaurants}/>
                        </Grid>    
                    }
            
                    {filters.pickup && 
                        <Grid item container>
                            <PickupRestaurants restaurants={restaurants}/>
                        </Grid>    
                    }
                    {filters.open && 
                        <Grid item container>
                            <OpenRestaurants restaurants={restaurants}/>
                        </Grid>    
                    }
                </Grid>
                
            )
        
        }
        else {
            return(<h1>Loading....</h1>)
        }
}
    

export default Listing;