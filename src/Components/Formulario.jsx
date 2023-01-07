import { useState } from "react"
import Swal from 'sweetalert2'

const Formulario = ({setNombrePais}) => {
  const [nombre , setNombre] = useState("")

  const handleChange = e => {
    let nombre = e.target.value
    setNombre(nombre)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!nombre.trim()){
      Swal.fire({
        title: 'Error!',
        text: 'Por favor ingrese el nombre de un Pais',
        icon: 'error',
      })
      return
    }
    setNombrePais(nombre)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label 
          htmlFor="exampleFormControlInput1" 
          className="form-label">
              Comience su busqueda
        </label>
        <input 
          type="text" 
          className="form-control" 
          id="exampleFormControlInput1" 
          placeholder="Ingrese el pais"
          name="nombre"
          value={nombre}
          onChange={handleChange}
        />
      </div>
      <button 
        className="btn btn-secondary"
        type="submit">
          Buscar
      </button>
    </form>
  )
}

export default Formulario
