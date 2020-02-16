import React, { useEffect, useState } from 'react';
import Breadcrumb from './breadcrumb';
import ProductList from './productList';
import { useHttp } from '../hooks/useHttp';
import useOld from '../helpers/useOld';
import { Container, Paper } from '@material-ui/core';
import { useStore } from '../stores/store';

const SearchPage = props =>{  
    const dispatch = useStore(true)[1]; 
    const { location } = props;
    const [categoriesLoadedState, setCategoriesLoaded] = useState(false);
    const query = new URLSearchParams(location.search);
    const searchString = query.get('search');
    const oldString = useOld(searchString);
    const { getProducts, products, categories} = useHttp();
    
    useEffect(()=>{
        if(!products && !categories || oldString !== searchString){
            getProducts(searchString);
        }
        if(!categoriesLoadedState && categories) {
            setCategoriesLoaded(true);
            dispatch('SET_CATEGORIES', categories);
        }
    },[getProducts, products, searchString, oldString, categoriesLoadedState, setCategoriesLoaded]);
    

    let toRender = (
        <div>
            <Breadcrumb categories={categories} />
            <Container>
                <Paper elevation={1} >
                    <ProductList products={products} categoties={categories}/>
                </Paper>
            </Container>
        </div>
    );

    if(!products && !categories){
        toRender = null;
    }

    return toRender
};

export default SearchPage;