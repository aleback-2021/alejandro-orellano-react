import Card from '../componentes/card/card'

const Listproducts =() =>{


    return(
        <div className='ContainerProducts'>
            <Card  nombre='Pan' marca='PanChulo' precio={200}  />
            <Card  nombre='Leche' marca='VacaBuena' precio={300}  />
            <Card  nombre='Queso Azul' marca='VacaBuena' precio={250}  />
            <Card  nombre='Fideo' marca='Molinete' precio={100}  />

        </div>


    )
}

export default Listproducts;