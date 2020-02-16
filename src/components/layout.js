import React, { Fragment as F} from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Header from './header';

const Layout = props =>{
    const { clearHttpData } = props;
    return(
        <F>
            <Header clearHttpData={clearHttpData} />
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