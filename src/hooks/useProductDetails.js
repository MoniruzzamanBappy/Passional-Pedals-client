import { useEffect, useState } from 'react';

const useProductDetails = (productId) => {
    const [product, setProduct] = useState({})
    useEffect(()=>{
        const url = `https://tranquil-refuge-32723.herokuapp.com/products/${productId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=> setProduct(data))
    },[productId])
    return [product, setProduct];
};

export default useProductDetails;