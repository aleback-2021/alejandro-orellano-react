export default function Card(props){
	return(
        <div className="card-prod">
            <img src="../src/img/pan.jpg"></img>
            <h2>{props.nombre}</h2>            
            <p>{props.marca}</p>
            <h3>{props.precio}</h3>
            <button>COMPRAR</button>
        </div>
    )
}