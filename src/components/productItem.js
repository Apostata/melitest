import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const ProductItem = props =>{
    const { id, price, title, picture, address, free_shipping, history } = props;
        
    return (
        <Container id={`product-${id}`} className="listItem-wrapper">
            <Grid container justify="center" alignItems="center" className="listItem" onClick={()=>history.push(`/items/${id}`)}>
                <Grid item xs={12} sm={3}>
                    <div className="image-wrapper">
                        <img src={picture} className="image"/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <div className="product-data">
                        <h2>
                            $ {price.amount},{price.decimals === 0 ? price.decimals+"0": price.decimals}
                            {free_shipping ? <span></span>: null}
                        </h2>
                        <h3>{title}</h3>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className="product-origin">
                        <p>{address.state_name}</p>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default withRouter(ProductItem);