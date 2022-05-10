import React from 'react';
import { Table } from 'react-bootstrap';
import useProduct from '../useProduct/useProduct';

const ManageInventories = () => {
    const [products] = useProduct()
    return (
        <div className='container mt-3'>
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
          <td><button>Update</button></td>
          <td><button>Delete</button></td>
        </tr>
      </tbody>)
  }
</Table>
        </div>
    );
};

export default ManageInventories;