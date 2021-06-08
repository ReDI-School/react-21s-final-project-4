import React,{useContext} from 'react';
import {createMuiTheme, Grid, ThemeProvider, Typography} from '@material-ui/core';
import { FilterDataContext } from '../contexts/FilterDataProvider';

function Header(){
    const [filter, setFilter] = useContext(FilterDataContext);
    
    
    
    
    function handleClick(event){
        const name = event.target.name;
        
        if(name==='open'){
            setFilter({
                open:true,
                delivery:false,
                pickup:false

            });
        }
        else if(name==='pickup'){
            setFilter({
                open:false,
                delivery:false,
                pickup:true
            });
        }
        else if(name==='delivery') {
            setFilter({
                open:false,
                delivery:true,
                pickup:false
            });
        }
        else{
            setFilter({
                open:false,
                delivery:false,
                pickup:false
            })
        }
        console.log(filter);
    }
    return(
        
        <Grid  item container >
            
            <Grid item xs={1}></Grid>
            
            <Grid item xs={5} >
                <h1 className="home-header">Our restaurants in Berlin</h1>
            </Grid>
                    
                <Grid item xs={5} container spacing={2} justify='flex-end' alignItems='center'>
                    <Grid item>
                        <a className="btn btn-ghost" name='delivery' onClick={handleClick} href='#home'>delivery</a>
                    </Grid>
                    <Grid item>
                        <a className="btn btn-ghost" name='open' onClick={handleClick} href='#home'>open</a>
                    </Grid>
                    <Grid item>
                        <a className="btn btn-ghost" name='pickup' onClick={handleClick} href='#home'>pickup</a>
                    </Grid>
                    <Grid item>
                    <a className="btn btn-ghost" name='all' onClick={handleClick} href='#home'>All</a>
                    </Grid>

                </Grid>
            
                
        </Grid>
       
    );
}

export default Header;