import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
const ManageItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    (async () => {
      const url = `http://localhost:5000/products/${id}`;
      const { data } = await axios.get(url);
      setService(data.data);
    })();
  }, [id]);
  const { img, name, supplierName, price, description, quantity } = service;
  return (
    <div className="container mt-3" style={{ minHeight: "50vh" }}>
      <div className="d-flex justify-content-center align-items-center">
        <button
          style={{
            background: "indianred",
            borderRadius: "3px",
            padding: "4px 8px",
            color: "white",
            border: "none",
          }}
          onClick={() => navigate("/add")}
        >
          Add Item <MdAddCircleOutline />
        </button>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="addItem">
          <form>
            <input
              type="number"
              name="quantity"
              placeholder="enter quantity"
              required
            />
            <input
              style={{ background: "indianred", color: "white" }}
              type="submit"
              value="Update Quantity"
            />
          </form>
        </div>
        <div>
          <Card className="card">
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>Name: {name}</Card.Title>
              <span>Supplier: {supplierName}</span>
              <p>Price: {price}</p>
              <span>{description}</span>
              <p>Quantity: {quantity < 1 ? <span className="text-danger">Sold</span> : quantity}</p>
              <button className="d-block card-btn">
                Deliver <AiOutlineDeliveredProcedure />
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
