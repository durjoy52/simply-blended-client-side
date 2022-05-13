import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useProduct = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
       (async()=>{
        const {data} = await axios.get('https://evening-mesa-58076.herokuapp.com/products')
        if(!data?.success){
            return toast.error(data?.error,{id:'error'})
        }
        setProducts(data?.data)
       })()
    },[])

    return [products,setProducts]
};

export default useProduct;