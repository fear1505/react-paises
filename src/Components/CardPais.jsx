const CardPais = ({item}) => {
  const {flags, name, capital, subregion, population} = item

  return (
    <div className="card mt-2">
      <img src={flags.png} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h2 className="card-title">{name.common}</h2>
        <h5 className="card-text">{name.nativeName.spa.official}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Capital {capital[0]}</li>
        <li className="list-group-item">Region {subregion}</li>
        <li className="list-group-item">Poblacion {population}</li>
      </ul>
    </div>
  )
}

export default CardPais
