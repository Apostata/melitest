import React, { useEffect, useState, Fragment as F } from 'react';
import Layout from './layout';
import Breadcrumb from './breadcrumb';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
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
                    {singleProduct.item.title}
                </Paper>
            </Container>    
        </div>
    );

    return toRender;
};

export default ProductPage;