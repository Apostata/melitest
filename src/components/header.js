import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';


import Search from './search';
import logo from '../imgs/Logo_ML.png';

const Header = props =>{

    return(
        <Grid item xs={12} className="header-wrapper">
            <Container maxWidth='lg'>
                <Grid container justify="center" >
                    <Grid item xs={1} className="logo-wrapper" >
                        <Grid container justify="center" >
                            <img src={logo} />
                        </Grid>
                    </Grid>
                    <Grid item xs={9} className="search-wrapper">
                        <Search/>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
};

export default Header;