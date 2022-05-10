import React from 'react';
import { Table } from 'react-bootstrap';
import useProduct from '../useProduct/useProduct';
import './ManageInventories.css';
const ManageInventories = () => {
    const handleUpdate = id =>{

    }
    const handleDelete = id =>{

    }
    const [products] = useProduct()
    return (
        <div className='container mt-3 inventories-section'>
            <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Image</th>
      <th>Product Name</th>
      <th>Supplier</th>
      <th>Description</th>
      <th>price</th>
      <th>quantity</th>
      <th>Update Item</th>
      <th>Delete Item</th>
    </tr>
  </thead>
  {
      products.map(product =><tbody key={product._id}>
        <tr>
          <td><img style={{width:'3rem',borderRadius:'50%'}} src={product.img} alt="" /></td>
          <td>{product.name}</td>
          <td>{product.supplierName}</td>
          <td>{product.description}</td>
          <td>${product.price}</td>
          <td>{product.quantity}</td>
          <td><button onClick={handleUpdate(product._id)} className='btn btn-success'>Update</button></td>
          <td><button onClick={handleDelete(product._id)} className='btn btn-danger'>Delete</button></td>
        </tr>
      </tbody>)
  }
</Table>
        </div>
    );
};

export default ManageInventories;