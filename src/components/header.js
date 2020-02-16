import React from 'react';
import { Container, Grid } from '@material-ui/core';


import Search from './search';
import logo from '../imgs/Logo_ML.png';
import { withRouter } from 'react-router-dom';

const Header = props =>{
    const { history } = props;
    return(
        <Grid item xs={12} className="header-wrapper">
            <Container maxWidth='lg'>
                <Grid container justify="center" >
                    <Grid item xs={1} className="logo-wrapper" >
                        <Grid container justify="center" >
                            <img src={logo} onClick={()=>{ history.push('/') }}/>
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

export default withRouter(Header);