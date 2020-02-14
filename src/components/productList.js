import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ProductItem from './productItem';

const ProductList = props => {
    const { products } = props;
    const renderProducts = useCallback(products => {
        return products.map((product)=>{     
            return (
                <ProductItem key={product.id} id={product.id}/>
            )
        });
    });
    return (
        <Container>
            <Paper elevation={1} >
                <Grid container justify="center" alignItems="center" >
                    {renderProducts(products)}
                </Grid>
            </Paper>
        </Container>
    );
}

export default ProductList;