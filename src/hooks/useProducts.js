import  { useEffect, useState } from 'react';

const useProducts = (link) => {
    const [item, setItem] = useState([])
    const url= `http://localhost:5000/${link}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[link, url])
    return [item];
};

export default useProducts;