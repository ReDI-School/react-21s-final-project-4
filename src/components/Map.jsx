import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactMapGl, {Marker, Popup} from "react-map-gl";
import { FilterListContext } from '../contexts/FilterListProvider';
import MapCard from "./MapCard";


function Map(props){
    
    const restaurants = props.restaurants;
    const [search] = useContext(FilterListContext);
    
    const [viewPort,setViewPort]= useState({
        latitude:52.5158,
        longitude:13.4540,
        width:'78.5vw',
        height:'83vh',
        zoom:11
    });

    const [selectedRestaurant,setSelectedRestaurant]= useState(null);
    const [delayHandler, setDelayHandler] = useState(null);
    
     
    return(
        <section id="map">
            <div >
                <ReactMapGl
                    {...viewPort}
                    mapboxApiAccessToken={'pk.eyJ1IjoieWFubzBvIiwiYSI6ImNrcHBuN2U0MzA5Y28ydnF6NHh2OXYyODQifQ.8rZb8cDgvvYHh9CM6vy9XA'}
                    onViewportChange={viewport =>{setViewPort(viewport);}}
                    mapStyle={'mapbox://styles/mapbox/streets-v11'}
                    >
                    

                {restaurants.filter((val) => {
                    if (search === '') {
                        return val;
                    } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                        return val;
                    }
                    }).map(res => (
                        <Marker
                        key={res.id} 
                        latitude={res.geometry.location.lat} 
                        longitude={res.geometry.location.lng}>
                            <button
                                className="marker-btn"
                                onClick={event =>{
                                    setDelayHandler(setTimeout(()=>{
                                        event.preventDefault();
                                        setSelectedRestaurant(res);
                                    },200))
                                }}  
                            >
                                <div>
                                <img src="../css/img/restaurant_marker.png" alt='bla'></img>
                                <p className="map-res--name">{res.name}</p>
                                </div>
                                
                            </button>
                            
                        </Marker>
                ))}

                {selectedRestaurant && (
                    
                    <Popup
                        className="popup"
                        latitude={selectedRestaurant.geometry.location.lat} 
                        longitude={selectedRestaurant.geometry.location.lng}
                        closeButton={true}
                        closeOnClick={false}
                        closeOnMove={true}
                        maxWidth= {'auto'}
                        
                        onClose={()=>{
                         setSelectedRestaurant(null);
                         }}
                        >
                        <Link
                            className='react-router__link'
                            to={`/restaurants/${selectedRestaurant.id}`}
                            style={{textDecoration: 'none',}}
                        >
                            <MapCard
                                img={selectedRestaurant.photos[0].links[0]}
                                name={selectedRestaurant.name}
                                rating={selectedRestaurant.rating}
                                usrs={selectedRestaurant.user_ratings_total }
                                cuisine={selectedRestaurant.cuisine}
                                type={selectedRestaurant.types[0]}
                                delivery={selectedRestaurant.delivery}
                                pickup={selectedRestaurant.pickup}
                                open={selectedRestaurant.opening_hours.open_now}
                                openHour={selectedRestaurant.opening_hours.hours.open}
                                closeHour={selectedRestaurant.opening_hours.hours.close}
                            />
                        </Link>
                            </Popup>
                        
                    
                )}
               
                </ReactMapGl>
            </div>
        </section>
    
    );

    
   
    
    
}
export default Map;