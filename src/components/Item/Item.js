import React from "react";
import { Card } from "react-bootstrap";
import { GrUpdate } from 'react-icons/gr';
import { useNavigate } from "react-router-dom";
import './Item.css';
const Item = ({ product }) => {
    const navigate = useNavigate()
  const { _id,name, price, quantity, img, description, supplierName } = product;
  return (
    <div className="col-md-6 col-lg-4 d-flex justify-content-center">
      <Card className="card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <span>Supplier: {supplierName}</span>
          <p>Price: ${price}</p>
          <span>{description}</span>
          <p className="text-warning fw-bold">
                Quantity:{" "}
                {quantity < 1 ? (
                  <span className="text-danger">Sold</span>
                ) : (
                  quantity
                )}
              </p>
          <button onClick={()=>navigate(`/manageItem/${_id}`)} className="d-block card-btn">Update <GrUpdate/></button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;

