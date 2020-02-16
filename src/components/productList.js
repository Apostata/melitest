import React, { useCallback } from 'react';
import { Grid } from '@material-ui/core';
import ProductItem from './productItem';

const ProductList = props => {
    const { products, categories } = props;
    const renderProducts = useCallback(products => {
        return products.map((product)=>{     
            return (
                <ProductItem key={product.id} {...product} categories={categories} />
            )
        });
    });
    return (
        <Grid container justify="center" alignItems="center" >
            {renderProducts(products)}
        </Grid>
    );
}

export default ProductList;