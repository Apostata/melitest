import React, { useCallback, useEffect, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { useHttp } from '../hooks/useHttp';

const ProductItem = props =>{
    const { id } = props;
    const {singleProduct, getProduct} = useHttp();

    useEffect(()=>{
        if(!singleProduct){
            getProduct(id);
        } else {
            console.log(singleProduct); 
        }
    },[singleProduct, getProduct, id]);

    return(
        <Container>
            <Grid container justify="center" alignItems="center" >
                <Grid item xs={2}>
                    {id}
                </Grid>
            </Grid>
        </Container>
    );
}

export default memo(ProductItem);