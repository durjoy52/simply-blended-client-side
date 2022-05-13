import React from "react";
import { Table } from "react-bootstrap";
import toast from "react-hot-toast";
import { MdAddCircleOutline } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useProducts/useProducts";
import "./ManageInventories.css";
const ManageInventories = () => {
  const [products, setProducts] = useProducts();
  const navigate = useNavigate()
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete this item?");
    if (proceed) {
      fetch(`https://evening-mesa-58076.herokuapp.com/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
         const remaining = products.filter(product => product._id !== id)
         setProducts(remaining)
         toast.success('delete successful')
        });
    }
  };

  return (
    <div className="container mt-3">
       <div className="d-flex justify-content-center align-items-center ">
        <button
          style={{
            background: "indianred",
            borderRadius: "3px",
            padding: "4px 8px",
            margin: "4px",
            color: "white",
            border: "none",
          }}
          onClick={() => navigate("/add")}
        >
          Add New Item <MdAddCircleOutline />
        </button>
      </div>
      <div className=" inventories-section overflow-auto">
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
        {products.map((product) => (
          <tbody key={product._id}>
            <tr>
              <td>
                <img
                  style={{ width: "3rem", borderRadius: "50%" }}
                  src={product.img}
                  alt=""
                />
              </td>
              <td>{product.name}</td>
              <td>{product.supplierName}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={()=>navigate(`/manageitem/${product._id}`)} className="btn btn-success">Update</button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
    </div>
    
  );
};

export default ManageInventories;
