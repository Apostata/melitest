export const listFormater = (items, type) =>{
    return items.map(item =>{
        switch(type){
            case 'product':
                return productFormater(item);
            case 'categorie':
                return categorieFormater(item);
        }
    });
};

const categorieFormater = categorie =>{
    return categorie.name;
};

export const productFormater = (product, detail = false) => {
   const price = (product.price / 100).toFixed(2).split('.');
    return {
        id: product.id,
        title:product.title,
        price:{
            currency:product.currency_id,
            amount: price[0],
            decimals: price[1]
        },
        picture: !detail ? product.thumbnail : detail,
        condition:product.condition,
        free_shipping:product.free_shipping
    }
};