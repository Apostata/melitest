// não tem validação do payload pois não há payload

import axios from 'axios';

export const getProducts = (req, res, next) => {
    res.status(200).send(
        [
            {name:"teste1"},
            {name:"teste1"},
        ]
    );
};

export const getProduct = (req, res, next) => {
    res.status(200).send(
        {
            name:"teste"
        }
    );
};
