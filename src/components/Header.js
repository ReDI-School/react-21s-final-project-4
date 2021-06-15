import React,{useContext} from 'react';
import { Grid} from '@material-ui/core';
import { FilterDataContext } from '../contexts/FilterDataProvider';
import SearchBar from './SearchBar';
import ListMapSwitch from './ListMApSwitch';

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
       
    }
    return(
        
        <Grid  item container direction ="column" spacing={5}>
            
        
            <Grid item ></Grid>
            
            <Grid item container>
                <Grid item xs={4}></Grid>
                <Grid item container xs={5} alignItems='center'>
                    <Grid container alignContent='center'>
                        <h1 className="home-header" id="home-header">Our restaurants in <em>Berlin</em> </h1>
                    </Grid>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
            
            <Grid item container spacing={5}>
                <Grid item xs={1} ></Grid>
                <Grid item container xs={12} sm={2} md={2} lg={3}><SearchBar/></Grid>
                <Grid item xs={2} sm={6}  md={6} lg={5} container m={5} spacing={4} justify='flex-start'  alignItems='center'>
                    <Grid item>
                            <a className="btn btn-ghost" name='delivery' onClick={handleClick} href='#input'>delivery</a>
                    </Grid>
                    <Grid item>
                            <a className="btn btn-ghost" name='open' onClick={handleClick} href='#input'>open</a>
                    </Grid>
                    <Grid item>
                            <a className="btn btn-ghost" name='pickup' onClick={handleClick} href='#input'>pickup</a>
                    </Grid>
                    <Grid item>
                        <a className="btn btn-ghost" name='all' onClick={handleClick} href='#input'>All</a>
                    </Grid>
                </Grid>
                <Grid item container xs={11} md={2} lg={2} justify='flex-end' alignItems='center'><ListMapSwitch /></Grid>
            </Grid>
            
        </Grid>
       
    );
}

export default Header;