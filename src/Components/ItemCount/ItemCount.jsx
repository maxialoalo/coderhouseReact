import { Button } from "@mui/material";
import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({ stock, initial=1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="container-btn">
    <h2 style={{color:"#af0d83"}}>Cantidad: {contador}</h2>
    <div className="btns">
      <Button variant="outlined" onClick={sumar} color="secondary">
        +
      </Button>
      <Button variant="contained" color="secondary" onClick={() => onAdd(contador)}>
        agregar al carrito
      </Button>
      <Button variant="outlined" onClick={restar} color="secondary">
        -
      </Button>
    </div>
  </div>
  );
};

export default ItemCount;
