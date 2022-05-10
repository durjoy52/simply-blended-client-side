import React from "react";
import { Card } from "react-bootstrap";
import './Item.css';
const Item = ({ product }) => {
  const { name, price, quantity, img, description, supplierName } = product;
  return (
    <div className="col-md-6 col-lg-4 d-flex justify-content-center">
      <Card className="card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <span>Supplier: {supplierName}</span>
          <p>Price: {price}</p>
          <span>{description}</span>
            <p>Quantity: {quantity}</p>
          <button className="d-block">Go somewhere</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;

