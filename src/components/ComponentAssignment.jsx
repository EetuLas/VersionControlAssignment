import React, { useState } from "react";

function Dropdown({ onProductSelect }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    const product = event.target.value;
    setSelectedOption(product);
    onProductSelect(product);
  };

  return (
    <div>
      <h3>Select product</h3>
      <p>Product:  <select value={selectedOption} onChange={handleChange}>
        <option value=""> Select an option </option>
        <option value="Ryzen 5 5600x"> Ryzen 5 5600x </option>
        <option value="Ryzen 7 7800x"> Ryzen 7 7800x </option>
        <option value="Ryzen 9 5900x"> Ryzen 9 5900x </option>
      </select>
      </p>
    </div>
  )
}

function QuantitySelector({onQuantityChange}) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  }
  const decreaseQuantity = () => {
    const newQuantity = quantity > 1 ? quantity - 1 : 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  }

  return (
    <div>
      <p>
        Quantity:  <button onClick={decreaseQuantity}>-</button>
        <span> {quantity} </span>
        <button onClick={increaseQuantity}>+</button>
      </p>
    </div>
  );
}

function OrderInfo({ product, quantity }){
  const prices = {
    "Ryzen 5 5600x": 170,
    "Ryzen 7 7800x": 200,
    "Ryzen 9 5900x": 230
  };

  const pricePerUnit = prices[product] || 0;
  const totalPrice = pricePerUnit * quantity;

  return (
    <div>
      <h3>Order Info</h3>
      {product && (
        <>
          <p>Product: {product}</p>
          <p>Quantity: {quantity}</p>
          <p>Total Price: ${totalPrice}</p>
        </>
      )}
    </div>
  );
}

function UI() {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <Dropdown onProductSelect={setSelectedProduct}/>
      <QuantitySelector onQuantityChange={setQuantity}/>
      <OrderInfo product={selectedProduct} quantity={quantity}/>
    </div>
  )
}

function ProductPage() {
    return (
        <div>
            <UI />
        </div>
    )
}

export default ProductPage;