import React, { useEffect, memo, useCallback, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const ProductItem = props =>{
    const { id, price, title, picture, address, history } = props;
        
    return (
        <Container id={`product-${id}`}>
            <Grid container justify="center" alignItems="center" className="listItem" onClick={()=>history.push(`/items/${id}`)}>
                <Grid item xs={3}>
                    <div className="image-wrapper">
                        <img src={picture} className="image"/>
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div className="product-data">
                        <h2>$ {price.amount},{price.decimals === 0 ? price.decimals+"0": price.decimals}</h2>
                        <h3>{title}</h3>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="product-origin">
                        <p>{address.state_name}</p>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default withRouter(memo(ProductItem));