import { useState } from "react";
import Formulario from "./Components/Formulario";
import PintarDatos from "./Components/PintarDatos"

const App = () => {
  const [nombrePais , setNombrePais] = useState("venezuela")
  return (
    <div className="container">
      <h1>App Paises</h1>
      <Formulario setNombrePais={setNombrePais}/>
      <PintarDatos nombrePais={nombrePais}/>
    </div>
  )
}

export default App;
