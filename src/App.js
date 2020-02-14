import React, { useEffect } from 'react';
import Layout from './components/layout';
import Breadcrumb from './components/breadcrumb';
import ProductList from './components/productList';
import { useHttp } from './hooks/useHttp';

const App = props =>{  
    const {getProducts, products, categories} = useHttp();
    
    useEffect(()=>{
        if(!products && !categories){
            getProducts();
        }
    },[getProducts, products])

    let toRender = (
        <Layout>
            <Breadcrumb categories={categories} />
            <ProductList products={products}/>
        </Layout>
    );

    if(!products && !categories){
        toRender = null;
    }

    return toRender
};

export default App;