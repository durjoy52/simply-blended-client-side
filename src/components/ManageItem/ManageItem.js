import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import toast from "react-hot-toast";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { useParams } from "react-router-dom";
const ManageItem = () => {
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    (async () => {
      const url = `http://localhost:5000/products/${id}`;
      const { data } = await axios.get(url);
      setService(data.data);
    })();
  }, [id, service]);
  const { img, name, supplierName, price, description, quantity } = service;
  const handleStockUpdate = (event) => {
    event.preventDefault();

    const newStock = event.target.quantity.value;
    fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: parseInt(quantity) + parseInt(newStock) }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Stock Updated successfully");
        event.target.reset();
      });
  };
  const handleDelivered = () => {
    fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: quantity - 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (quantity < 1) {
          return toast.error("No item to deliver",{id:'error'});
        } else toast.success("Item delivered");
      });
  };

  return (
    <div className="container my-3" style={{ minHeight: "50vh" }}>
      <div className="d-flex flex-md-row flex-column-reverse justify-content-between align-items-center gap-2">
        <div className="addItem">
          <form onSubmit={handleStockUpdate}>
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
        <div className="d-flex justify-content-center align-items-center">
          <Card className="card">
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>Name: {name}</Card.Title>
              <p><small>id: {id}</small></p>
              <span>Supplier: {supplierName}</span>
              <p>Price: {price}</p>
              <span>{description}</span>
              <p className="text-warning fw-bold">
                Quantity:{" "}
                {quantity < 1 ? (
                  <span className="text-danger">Sold</span>
                ) : (
                  quantity
                )}
              </p>
              <button onClick={handleDelivered} className="d-block card-btn">
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
