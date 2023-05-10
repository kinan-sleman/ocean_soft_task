import React from "react";
import { useCart } from "./CartContext";
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import QuantitySelector from "./QuantitySelector";
import '../styles/Cart.css';
function Cart() {
  const { cart, removeFromCart } = useCart();

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      let price = item.price;
      let quantity = item.quantity;
      total += price * quantity;
    });
    return total.toFixed(2);
  };

  return (
    <div className="cartContainer">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Remove</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <img src={item.image} alt={item.title} />
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.size}</TableCell>
                <TableCell>
                  <QuantitySelector
                    quantity={item.quantity}
                    setQuantity={(newQuantity) => {
                      item.quantity = newQuantity;
                    }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    aria-label="remove from cart"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
                <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="totalPriceContainer">
        <span className="totalPrice">{`Cart Total: $${calculateTotalPrice()}`}</span>
      </div>
    </div>
  );
}

export default Cart;