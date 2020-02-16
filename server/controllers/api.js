// não tem validação do payload pois não há payload

import axios from 'axios';
import { listFormater, productFormater } from '../helpers/prodFormater'

export const getProducts = (req, res, next) => {
    let { q, limit } = req.query;
    q = q || '';
    limit = limit || 4;

    axios.get(`${process.env.BACK_SEARCH}?q=${q}&limit=${limit}`)
        .then(response => {
            const result = response.data;
            const resToReturn = {
                author: {
                    name: "Rene",
                    lastname: "Souza"
                },
                categories: listFormater(result.filters[0].values[0].path_from_root, 'categorie'),
                items: listFormater(result.results, 'product')
                
            };
            res.send(resToReturn);
        })
        .catch(error => {
            res.status(error.response.status).send(error.response.data)
        });
};

export const getProduct = (req, res, next) => {
    let { id } = req.params;
    let fetchedProduct;

    axios.get(`${process.env.BACK_PRODUCT}/${id}`)
    .then(response => {
        const result = response.data
        return result;
    })
    .then(product =>{
        fetchedProduct = product;
        return axios.get(`${process.env.BACK_PRODUCT}/${id}/description`);
    })
    .then(description=>{
        const resToReturn = {
            author: { 
                name: 'Rene',
                lastname: 'Souza'
            },
            item: {
                ... productFormater(fetchedProduct, fetchedProduct.pictures[0].url),
                sold_quantity: fetchedProduct.sold_quantity,
                description: description.data.plain_text
            }
        };
        res.send(resToReturn);
    })
    .catch(error => {
        res.status(error.response.status).send(error.response.data)
    });
};
