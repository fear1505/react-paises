import Swal from 'sweetalert2'
import { useEffect, useState } from "react"
import CardPais from "./CardPais"

const PintarDatos = ({nombrePais}) => {
    const [infoPaises, setInfoPaises] = useState([])

    useEffect(()=>{
        peticionPais(nombrePais)
    },[nombrePais])
    
    const peticionPais = async (pais) => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${pais}`)
        if(!res.ok){
            Swal.fire({
                title: 'Error!',
                text: 'El pais que ingreso no Existe',
                icon: 'error',
            })
            return
        }
        const datos = await res.json()
        console.log(datos)
        setInfoPaises(datos)
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div>
      {
        infoPaises.map((item)=>(
            <CardPais key={item.ccn3} item={item}/>
        ))
      }
    </div>
  )
}

export default PintarDatos
