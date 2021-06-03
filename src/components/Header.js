import {  Typography, Grid, Chip} from '@material-ui/core';

function Header(){
    return(
        
        <Grid className="homeScreen-header" container alignItems="center">
    
            <Grid item xs={2} >
                
            </Grid>
                        
            <Grid item xs={4} >
                <Typography variant="h5" className="typography">
                        Restaurants in Berlin
                </Typography>
            </Grid>
            
            <Grid item xs={4} >
            <Chip
                size="medium"
                label="online"
                clickable
                color="primary" 
            />
            <Chip
                size="medium"
                label="Pickup"
                clickable
                color="primary" 
            />
            <Chip
                size="medium"
                label="Delivery"
                clickable
                color="primary" 
            />

            </Grid>
            
            <Grid item xs={2}></Grid>
                    
        </Grid>
       
    );
}

export default Header;