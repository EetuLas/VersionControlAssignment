import React from "react"
import Header from "./components/Header";
import Images from './components/OpenDataAssignment';
import "./App.css";

function App() {
  return (
    <div>
      <Header title="Welcome to the Cat Images App!"/>
      <Images />
    </div>
  )
}

export default App;
