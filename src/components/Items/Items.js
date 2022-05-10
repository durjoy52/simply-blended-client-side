import React from 'react';
import { MdManageSearch } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Item from '../Item/Item';
import useProduct from '../useProduct/useProduct';
const Items = () => {
    const navigate = useNavigate()
    const [products] = useProduct()
    return (
        <div>
            <h3 className='text-center'>Inventory</h3>
            <div id='inventory' className='row mb-4 g-3'>
            {
                products.slice(0,6).map(product =><Item key={product._id} product={product}></Item>)
            }
            <div className="d-flex justify-content-end">
            <button onClick={()=>navigate('/manage')} className='manage-btn'>Manage Inventories <MdManageSearch/></button>
            </div>
        </div>
        </div>
    );
};

export default Items;

