import React, { useState } from "react";

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('')
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  }

  return (
    <div>
      <h3>Select product</h3>
      <select value={selectedOption} onChange={handleChange}>
        <option value=""> Select an option </option>
        <option value="option1"> Ryzen 5 5600x </option>
        <option value="option2"> Ryzen 7 7800x </option>
        <option value="option3"> Ryzen 9 5900x </option>
      </select>
    </div>
  )
}

function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => { setQuantity(prevQuantity => prevQuantity + 1); }
  const decreaseQuantity = () => { setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1)); }

  return (
    <div>
      <h3>Quantity</h3>
      <button onClick={decreaseQuantity}>-</button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity}>+</button>
    </div>
  );
}

function UI() {
  return (
    <div>
      <Dropdown />
      <QuantitySelector />
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