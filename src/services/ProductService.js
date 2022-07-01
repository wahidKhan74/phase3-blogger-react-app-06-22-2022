const APIURL ="http://localhost:3000/products";

// Get all products
export const getProducts= () =>{
    return fetch(`${APIURL}?_sort=id&_order=desc`).then((response)=>{
        return response.json();
    });
}

// Add product 
export const addProduct= (product) =>{
    const headers = {'Content-Type':'application/json' };
    const body = JSON.stringify(product);
    const request = { method :'POST', headers: headers, body:body };
    // fetch with post method to create product
    return fetch(APIURL, request).then((response)=>{
        return response.json();
    });
}

// Update product 
export const updateProduct= (product) =>{
    const headers = {'Content-Type':'application/json' };
    const body = JSON.stringify(product);
    const request = { method :'PUT', headers: headers, body:body };
    // fetch with post method to create product
    return fetch(APIURL, request).then((response)=>{
        return response.json();
    });
}

// DELETE product 
export const deleteProduct= (productId) =>{
    const request = { method :'DELETE' };
    // fetch with post method to create product
    return fetch(`${APIURL}/${productId}`, request).then((response)=>{
        return response.json();
    });
}

// Search product by title
export const searchProduct= (productTitle) =>{
    // fetch with post method to create product
    return fetch(`${APIURL}?title=${productTitle}`).then((response)=>{
        return response.json();
    });
}