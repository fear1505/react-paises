const CardPais = ({item}) => {
  const {flags, name, capital, subregion, population} = item
  //console.log(item)
  //console.log(capital)

  return (
    <div className="card col-md-4 mb-3">
      <img src={flags.png} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h2 className="card-title">{name.common}</h2>
        <h5 className="card-text">{name.official}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Capital {capital}</li>
        <li className="list-group-item">Region {subregion}</li>
        <li className="list-group-item">Poblacion {population}</li>
      </ul>
    </div>
  )
}

export default CardPais
