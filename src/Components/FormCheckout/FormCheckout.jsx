import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => console.log(err));

    cart.map((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
      return product
    });
  };

  return (
    <div style={{margin:"50px"}}>
      <form onSubmit={handleSubmit} style={{display:"flex", justifyContent:"space-evenly", }}>
      <TextField id="filled-basic" label="Nombre" variant="filled" placeholder="Ingrese su Nombre"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}/>
      <TextField id="filled-basic" label="Email" variant="filled" placeholder="Ingrese su Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}/>
        
     <TextField id="filled-basic" label="Telefono" variant="filled" placeholder="Ingrese su Telefono"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value})}/>
    
    <Button variant="contained" type="submit">Comprar</Button>
      </form>
    </div>
  );
};

export default FormCheckout;
