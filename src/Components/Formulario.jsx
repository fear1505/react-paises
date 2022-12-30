import { useState } from "react"

const Formulario = ({setPais}) => {
  const [nombrePais, setNombrePais] = useState("")

  const handleChange = e => {
    const {name, value} = e.target

    setNombrePais((old)=>({
      ...old,
      [name]: value
    }))
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    setPais(nombrePais)
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
            name="nombrePais"
            //value={nombrePais}
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
