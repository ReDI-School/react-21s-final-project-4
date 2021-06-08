import React, { useContext } from "react";
import {Grid} from "@material-ui/core";
import ResCard from "./ResCard";
import { FilterListContext } from "../contexts/FilterListProvider";

function RenderRestaurants(props){
    
    const restaurants = props.restaurants;
    const [search]=useContext(FilterListContext);
    
    return(
        restaurants.filter((val)=>{
            if(search == ''){
                return val;
            }
            else if(val.name.toLowerCase().includes(search.toLowerCase())) {
                return val;
            }
        }).map((restaurant)=>{
            return(
                    <Grid item xs={12} sm={6} md={4} lg={3} key={restaurant.id}>
                        <ResCard
                            
                            img = {restaurant.photos[0].links[0]}
                            name= {restaurant.name}
                            address = {restaurant.formatted_address}
                            cuisine = {restaurant.cuisine} 
                            type= {restaurant.types[0]}
                        />
                    </Grid>               
            );
        })
    );
    /* else {}*/

}

export default RenderRestaurants;