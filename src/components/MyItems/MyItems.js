import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import { auth } from "../../firebase/firebase.init";
import Loading from "../Loading/Loading";

const MyItems = () => {
  const navigate = useNavigate()
  const [user, loading, error] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      if (loading) {
        return <Loading />;
      }
      if (error) {
        return toast.error(error.message, { id: "err" });
      }
      try {
        const {data} =await axiosPrivate.get(`https://evening-mesa-58076.herokuapp.com/myItems?email=${user?.email}`)
        setMyItems(data);
      } catch (error) {
        console.log(error.message);
        if(error.response.status === 401 || error.response.status === 403){
          signOut(auth)
          navigate('/login')
        }
      }
    };
    getOrders()
  }, [user,loading,error,navigate]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete this item?");
    if (proceed) {
      fetch(`https://evening-mesa-58076.herokuapp.com/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = myItems.filter((product) => product._id !== id);
          setMyItems(remaining);
          toast.success("delete successful");
        });
    }
  };

  return (
    <div className="container my-3">
      <h3 className="text-center">My Items: {myItems.length}</h3>
      <div className="row g-3">
        {myItems.map((item) => (
          <div
            key={item._id}
            className="col-md-6 col-lg-4 d-flex justify-content-center"
          >
            <Card className="card">
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>Name: {item.name}</Card.Title>
                <span>Supplier: {item.supplierName}</span>
                <p>Price: ${item.price}</p>
                <span>{item.description}</span>
                <p className="text-warning fw-bold">
                  Quantity:{" "}
                  {item.quantity < 1 ? (
                    <span className="text-danger">Sold</span>
                  ) : (
                    item.quantity
                  )}
                </p>
              </Card.Body>
              <Button
                onClick={() => handleDelete(item._id)}
                className="btn btn-danger"
              >
                Delete
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
