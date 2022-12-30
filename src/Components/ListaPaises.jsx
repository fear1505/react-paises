import { useEffect, useState } from "react"

const ListaPaises = ({pais}) => {
  const [lugar, SetLugar] = useState([])

  useEffect(()=>{
    consumirApi(pais)
  },[pais])

  const consumirApi = async (nombre) =>{
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${nombre.nombrePais}`)
      const datos = await res.json()
      SetLugar(datos)
      console.log(datos)
    } catch (error) {
        console.log(error)
    }
  }
  
  return (
    <>
        <div className="card mt-2">
            <img src="" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
            </div>
        </div> 
    </>
  )
}

export default ListaPaises
