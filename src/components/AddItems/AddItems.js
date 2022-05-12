import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { auth } from "../../firebase/firebase.init";
import "./AddItem.css";
const AddItems = () => {
  const [user] = useAuthState(auth)
  const [userEmail,setUserEmail] = useState({email:user.email})
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value
    const name = event.target.name.value;
    const supplierName = event.target.supplierName.value;
    const description = event.target.description.value;
    const quantity = event.target.quantity.value;
    const price = event.target.price.value;
    const img = event.target.img.value;

    const user = {email, name, supplierName, description, quantity, price, img };
    event.target.reset()

    const { data } = await axios.post("http://localhost:5000/products", user);
    if(data) return toast.success('Item added')
  };
  const handleEmail = event =>{
    const newEmail = event.target.value;
    const newUser = {email:newEmail}
    setUserEmail(newUser)
  }
  return (
    <div className="container mt-3 addItemField">
      <div className="addItem">
        <form onSubmit={handleOnSubmit}>
          <div>
            <input onChange={handleEmail} type="email" name="email" value={userEmail.email} placeholder="your email" required/>
          </div>
          <div>
            <input autoFocus type="text" name="name" placeholder="product name" required/>
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
