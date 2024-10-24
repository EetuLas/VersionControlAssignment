import React from "react"
import Header from "./components/Header";
import Images from './components/OpenDataAssignment';

function App() {
  return (
    <div>
      <Header title="Welcome to the Cat Images App!" image={null}/>
      <Images />
    </div>
  )
}

export default App;
