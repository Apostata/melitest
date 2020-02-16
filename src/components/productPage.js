import React, { useEffect, useState, Fragment as F } from 'react';
import Breadcrumb from './breadcrumb';
import { Container, Grid, Paper } from '@material-ui/core';

import { useHttp } from '../hooks/useHttp';
import { useStore } from '../stores/store';

const ProductPage = props =>{  
    const { getProduct, singleProduct } = useHttp();
    const { categories }  = useStore(true)[0];
    const [productLoaded, setProductLoaded] = useState(false); 
    const { id } =  props.match.params;

    useEffect(()=>{
        if(!productLoaded && !singleProduct){
            getProduct(id);
        } 
        if(singleProduct && !productLoaded){
            console.log(singleProduct);
            setProductLoaded(true);
        }
    },[ getProduct, id, productLoaded, setProductLoaded]);

    let toRender = !singleProduct ? null :
    (
        <div>
            <Breadcrumb categories={categories} />
             <Container>
                <Paper elevation={1} >
                    <Container>
                        <Grid container justify="center">
                            <Grid item xs={7}>
                                <div className="image-wrapper">
                                    <img src={singleProduct.item.picture} />
                                </div>
                            </Grid>
                            <Grid item xs={5}>
                                <p>{singleProduct.item.condition} - {singleProduct.item.sold_quantity}</p>
                                <h1>{singleProduct.item.title}</h1>
                                <h2>$ {singleProduct.item.price.amount},{singleProduct.item.price.decimals===0? singleProduct.item.price.decimals+"0" : singleProduct.item.price.decimals}</h2>
                            </Grid>
                        </Grid>
                        <Grid container justify="center">
                            <Grid item xs={5}>
                                <h3>Descripción del producto</h3>
                                <p>
                                    {singleProduct.item.description}
                                </p>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </Container>    
        </div>
    );

    return toRender;
};

export default ProductPage;