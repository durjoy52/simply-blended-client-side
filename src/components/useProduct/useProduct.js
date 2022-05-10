import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useProduct = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
       (async()=>{
        const {data} = await axios.get('http://localhost:5000/products')
        if(!data?.success){
            return toast.error(data?.error,{id:'error'})
        }
        setProducts(data?.data)
       })()
    },[])

    return [products]
};

export default useProduct;