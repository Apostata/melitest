import React, { useEffect, useState, Fragment as F } from 'react';
import Breadcrumb from './breadcrumb';
import { Container, Grid, Paper, Button } from '@material-ui/core';

import { useHttp } from '../hooks/useHttp';
import { useStore } from '../stores/store';

const ProductPage = props =>{  
    const { getProduct, getProducts, singleProduct, categories } = useHttp();
    const [globalstate, dispatch]  = useStore(true);
    const storedaCategories = globalstate.categories;
    const [productLoaded, setProductLoaded] = useState(false); 
    const { id } =  props.match.params;

    useEffect(()=>{
        
        if(!productLoaded && !singleProduct){
            getProduct(id);
        } 
        if(singleProduct && !productLoaded){
            setProductLoaded(true);
        }
        
        if(!storedaCategories && !categories && singleProduct && !productLoaded){
            getProducts(singleProduct.item.title);
        }
        if(!storedaCategories && categories){
            dispatch('SET_CATEGORIES', categories)
        }

        
    },[ getProduct, getProduct, dispatch, id, productLoaded, setProductLoaded, storedaCategories, categories]);

    let toRender = !singleProduct ? null :
    (
        <F>
            <Breadcrumb categories={storedaCategories?storedaCategories || categories:['carregando...']} />
             <Container>
                <Paper elevation={1} >
                    <Container className="product-details">
                        <Grid container justify="center">
                            <Grid item xs={12} sm={7}>
                                <div className="image-wrapper">
                                    <img src={singleProduct.item.picture} />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4} className="product-data">
                                <p>{singleProduct.item.condition} - {singleProduct.item.sold_quantity}</p>
                                <h1>{singleProduct.item.title}</h1>
                                <h2>$ {singleProduct.item.price.amount},{singleProduct.item.price.decimals===0? singleProduct.item.price.decimals+"0" : singleProduct.item.price.decimals}</h2>
                                <Grid container justify="center">
                                    <Grid item xs={12}>
                                        <Button className="buyButton" type="submit">Comprar</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container justify="flex-start" className="product-description">
                            <Grid item xs={12} sm={8}>
                                <h3>Descripción del producto</h3>
                                <p>
                                    {singleProduct.item.description}
                                </p>
                                
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </Container>    
        </F>
    );

    return toRender;
};

export default ProductPage;