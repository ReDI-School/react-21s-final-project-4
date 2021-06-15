import React, { useContext } from 'react';
import {FilterRenderContext} from '../contexts/FilterRenderProvider';
import { Grid} from '@material-ui/core';
import {Link} from 'react-scroll';

function Hero() {
    const [isMap,setIsMap] = useContext(FilterRenderContext);
    function handleClick(event){
        const name= event.target.name;
        if(name==='map'){
            setIsMap(true);
        }
        else{
            setIsMap(false);
        }
    }
    
    return(
        <Grid container direction="column">
            <header>
                <nav>
                <Grid item container alignItems='center'>
                    <Grid item xs={false} sm={1} md={1} lg={1}></Grid>
                    <Grid item xs={1} sm={1} md={2} lg={2}>
                        <img src="../css/img/logo-white.png" alt="Omnifood logo" className="logo"/>
                    </Grid>
                    <Grid item xs={11} sm={9} md={8}  lg={8}>
                        <ul className="main-nav"> 
                            <Link to='home-header' smooth={true}>
                            <li><a href="#home-header" name='list' onClick={handleClick}>Our  Restaurants</a></li>
                            </Link>
                            <Link to='input' smooth={true}>
                            <li><a href="#input" name='map' onClick={handleClick}>Restaurants  Location</a></li>
                            </Link>
                        </ul>
                    </Grid>
                </Grid>
                </nav>
                
                    <div className="hero-text-box">
                        <Grid item container>
                            <Grid item xs={1}></Grid>
                            <Grid item >
                                <h1>Support local restaurants.<br />Eat <em>great food</em></h1>
                            </Grid>
                        </Grid>
                    </div>
                
            </header>
            </Grid>
        
    );
}

export default Hero;