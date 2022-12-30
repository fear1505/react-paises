import { useState } from "react";
import Formulario from "./Components/Formulario";
import ListaPaises from "./Components/ListaPaises";

const App = () => {
  const [pais, setPais] = useState("")
  
  return (
    <div className="container">
      <h1>Hola a todos</h1>
      <Formulario setPais={setPais}/>
      <ListaPaises pais={pais}/>
    </div>
  )
}

export default App;
