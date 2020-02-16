import React, { Fragment as F} from 'react';
import { Container, Grid } from '@material-ui/core';
import Header from './header';

const Layout = props =>{
    return(
        <F>
            <Header />
            <Grid item xs={12} className="content-wrapper">
                <Container maxWidth='lg'>
                    <Grid container justify="center" alignItems="center"  className="article-wrapper">
                        <Grid item xs={10} >
                            {props.children}
                        </Grid>
                    </Grid>
                </Container>    
            </Grid>
        </F>
    )
};

export default Layout;