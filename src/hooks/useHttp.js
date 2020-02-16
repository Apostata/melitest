import axios from 'axios'
import { useReducer, useCallback } from 'react';
const initialState = {
    loading: false,
    products: null,
    categories: null,
    error: null,
    singleProduct: null,
}

const httpReducer = (httpState, action) => { 
    switch(action.type){
        
        case 'GET_PRODUCTS':
            return {
                ...httpState,
                products: action.result.items,
                categories:action.result.categories
            };

        case 'GET_SINGLE_PRODUCT':
            return {
                ...httpState,
                singleProduct: action.product
            };

        case 'SET_ERROR':
            return {
                ...httpState,
                error: action.error
            };

        case 'CLEAR':
            return {
                initialState
            };
    }
};

export const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

    const getProducts = useCallback(query  =>{
        const fetchProducts = async () =>{
            
            try{
                const response = await axios({
                    method:'GET',
                    url:`${process.env.FRONT_API}?q=${query || "Iphone"}&limit=4`
                });
                dispatchHttp({type:'GET_PRODUCTS', result: response.data});
            }
            catch(err){
                console.log(err.message);
                dispatchHttp({type:'SET_ERROR', error: err.message});
            }
        };
        fetchProducts();
    });

    const getProduct = useCallback(id =>{
        const fetchProduct = async () =>{
            
            try{
                const response = await axios({
                    method:'GET',
                    url:`${process.env.FRONT_API}/${id}`
                });
                dispatchHttp({type:'GET_SINGLE_PRODUCT', product: response.data});
            }
            catch(err){
               console.log(err.message);
               dispatchHttp({type:'SET_ERROR', error: err.message});
            }
        };
        fetchProduct();
    });

    const clearHttpData = useCallback(()=>{
        dispatchHttp({type:'CLEAR'});
    })

    return {
        products: httpState.products,
        singleProduct: httpState.singleProduct,
        categories: httpState.categories,
        error: httpState.error,
        getProducts,
        getProduct,
        clearHttpData,
    }
};