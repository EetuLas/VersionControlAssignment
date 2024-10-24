import React, { useState } from "react";

function Header() {
    return (
      <header>
        <h1>Welcome to product page!</h1>
      </header>
    );
}

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

function UI() {
  return (
    <div>
      <Dropdown />
    </div>
  )
}

function ProductPage() {
    return (
        <div>
            <Header />
            <UI />
        </div>
    )
}

export default ProductPage;