import  { useEffect, useState } from 'react';

const useProducts = (link) => {
    const [item, setItem] = useState([])
    const url= `https://tranquil-refuge-32723.herokuapp.com/${link}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[link, url])
    return [item, setItem];
};

export default useProducts;