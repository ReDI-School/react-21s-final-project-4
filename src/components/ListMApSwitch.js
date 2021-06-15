import React,{useContext} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {FilterRenderContext} from '../contexts/FilterRenderProvider';

function ListMapSwitch() {
    
    const PurpleSwitch = withStyles({
        switchBase: {
          color: '#2196f3',
          '&$checked': {
            color: '#2196f3',
          },
          '&$checked + $track': {
            backgroundColor: '#64b5f6',
          },
        },
        checked: {},
        track: {},
      })(Switch);
      const [isMap,setIsMap] = useContext(FilterRenderContext);
      
      
      
      const handleChange = (event) => {
        
        setIsMap(!isMap);
      };

    return(
        <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item className="list-map--switch">List</Grid>
          <Grid item>
          <PurpleSwitch checked={isMap} onChange={handleChange} name="checkedA" />
          </Grid>
          <Grid item className="list-map--switch">Map</Grid>
        </Grid>
      </Typography>
    );

}

export default ListMapSwitch;