import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Item from '../Item/Item';
const Items = () => {
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
    return (
        <div className='row mb-3 g-2'>
            {
                products.map(product =><Item key={product._id} product={product}></Item>)
            }
        </div>
    );
};

export default Items;

