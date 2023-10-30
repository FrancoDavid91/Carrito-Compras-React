import { Card } from '../components/Card'
import { ProductsContext } from '../context/ProductsContext'
import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

export const ComprasPage = () => {

    const {products} = useContext(ProductsContext)

    const { listaCompras, agregarCompra, aumentarCompra, disminuirCompra, eliminarCompra } = useContext(CarritoContext)

    const handleAgregar = (compra) =>{
      agregarCompra(compra)
    }
    const handleQuitar = (id) =>{
      eliminarCompra(id)
    }
    /* const handleDisminuir= (id) =>{

    } 
    const handleAumentar= (id) =>{

    } */


  return (
    <>
    <h1>Compras</h1>
    <hr />
    
    {products.map(product => (
        <Card key={product.id}
          imagen={product.image}
          titulo={product.title}
          descripcion={product.description}
          precio={product.price}
          handleAgregar={() => handleAgregar(product)}
          handleQuitar={() => handleQuitar(product.id)}
        >

        </Card>
    ))}

    </>
  )
}
