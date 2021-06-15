import { Grid } from "@material-ui/core";
import React, { useContext } from "react";

import { FilterDataContext } from '../contexts/FilterDataProvider';

import AllRestaurants from "./AllRestaurants";
import DeliveryRestaurants from './DeliveryRestaurants';
import PickupRestaurants from './PickupRestaurants';
import OpenRestaurants from './OpenRestaurants';



function Listing(props){
    
    const [filters] = useContext(FilterDataContext);
    const restaurants =props.restaurants;
            
            return(  
                <Grid  container >
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
    

export default Listing;