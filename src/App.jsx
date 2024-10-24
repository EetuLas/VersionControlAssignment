import React from "react"
import Header from "./components/Header"
import ProductPage from "./components/ComponentAssignment";
import logo from "./images/logo.png";

function App() {
  return (
    <div>
      <Header title="Welcome to the product page!" image={logo}/>
      <ProductPage />
    </div>
  )
}

export default App;
