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
                products: action.result.results,
                categories:action.result.filters[0].values[0].path_from_root
            };
        case 'GET_SINGLE_PRODUCT':
            return {
                ...httpState,
                singleProduct: action.product
            };
    }
};

export const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

    const getProducts = useCallback((query = 'Apple ipod') =>{
        const fetchProducts = async () =>{
            
            try{
                const response = await axios({
                    method:'GET',
                    url:`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`
                });
                dispatchHttp({type:'GET_PRODUCTS', result: response.data});
            }
            catch(err){
                dispatch('SET_ERROR', err.message);
            }
        };
        fetchProducts();
    });

    const getProduct = useCallback(id =>{
        const fetchProduct = async () =>{
            
            try{
                const response = await axios({
                    method:'GET',
                    url:`https://api.mercadolibre.com/items/${id}`
                });
                dispatchHttp({type:'GET_SINGLE_PRODUCT', product: response.data});
                //console.log(response);
            }
            catch(err){
                dispatch('SET_ERROR', err.message);
            }
        };
        fetchProduct();
    });

    return {
        products: httpState.products,
        singleProduct: httpState.singleProduct,
        categories: httpState.categories,
        error: httpState.error,
        getProducts,
        getProduct,
    }
};