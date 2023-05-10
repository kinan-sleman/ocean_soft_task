import React from "react";
import { IconButton, TextField } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import '../styles/ProductInfo.css';

function QuantitySelector({ quantity, setQuantity }) {
  const handleQuantityDecrease = () => {
    setQuantity((prev) => prev - 1);
  };

  const handleQuantityIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="quantityControl">
      <IconButton
        onClick={handleQuantityDecrease}
        disabled={quantity <= 1}
        className="quantityButton"
      >
        <Remove />
      </IconButton>
      <TextField
        type="number"
        variant="outlined"
        size="small"
        value={quantity}
        InputProps={{ inputProps: { min: 1 } }}
        className="quantityInput"
      />
      <IconButton onClick={handleQuantityIncrease} className="quantityButton">
        <Add />
      </IconButton>
    </div>
  );
}

export default QuantitySelector;