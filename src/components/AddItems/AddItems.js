import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
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
    event.target.reset()

    const { data } = await axios.post("http://localhost:5000/products", user);
    toast.success('Item added')
  };
  return (
    <div className="container mt-3 addItemField">
      <div className="addItem">
        <form onSubmit={handleOnSubmit}>
          <div>
            <input type="text" name="name" placeholder="product name" required/>
          </div>
          <div>
            <input
              type="text"
              name="supplierName"
              placeholder="supplier name" required
            />
          </div>
          <div>
            <input
              type="text"
              name="description" 
              placeholder="short description" required
            />
          </div>
          <div>
            <input type="number" name="quantity" placeholder="quantity" required/>
          </div>
          <div>
            <input type="number" name="price" placeholder="price" required/>
          </div>
          <div>
            <input type="text" name="img" placeholder="image-link" required/>
          </div>
          <div>
            <input style={{background:'indianred',color:'white'}} type="submit" value="Add Item" required/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
