import axios from "axios";
import React from "react";
import "./AddItem.css";
const AddItems = () => {
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const supplierName = event.target.supplierName.value;
    const description = event.target.description.value;
    const quantity = event.target.quantity.value;
    const price = event.target.price.value;
    const img = event.target.img.value;

    const user = { name, supplierName, description, quantity, price, img };

    const { data } = await axios.post("http://localhost:5000/products", user);
    console.log(data);
  };
  return (
    <div className="container mt-3 addItemField">
      <div className="addItem">
        <form onSubmit={handleOnSubmit}>
          <div>
            <input type="text" name="name" placeholder="product name" />
          </div>
          <div>
            <input
              type="text"
              name="supplierName"
              placeholder="supplier name"
            />
          </div>
          <div>
            <input
              type="text"
              name="description"
              placeholder="short description"
            />
          </div>
          <div>
            <input type="text" name="quantity" placeholder="quantity" />
          </div>
          <div>
            <input type="text" name="price" placeholder="price" />
          </div>
          <div>
            <input type="text" name="img" placeholder="image-link" />
          </div>
          <div>
            <input style={{background:'indianred',color:'white'}} type="submit" value="Add Item" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
