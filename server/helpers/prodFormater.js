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
   const price = product.price.toString().split('.');
    return {
        id: product.id,
        title:product.title,
        price:{
            currency:product.currency_id,
            amount: Number(price[0]),
            decimals: Number(price[1]) || 0
        },
        picture: !detail ? product.thumbnail.replace(/-\w.jpg/, '-O.jpg') : detail,
        condition:product.condition,
        free_shipping:product.shipping.free_shipping,
        address: product.address
    }
};