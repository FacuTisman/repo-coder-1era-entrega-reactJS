import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase"
import { useCart } from "../context/CartContext"

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const { categoryId } = useParams()
  const { addToCart } = useCart()

  useEffect(() => {
    const productosRef = collection(db, "Productos")
    const q = categoryId
      ? query(productosRef, where("categoria", "==", categoryId))
      : productosRef

    getDocs(q)
      .then((snapshot) => {
        const productosAdaptados = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setProductos(productosAdaptados)
      })
      .catch(error => {
        console.error("Error al obtener productos:", error)
      })
  }, [categoryId])

  return (
    <div>
      <h2>Productos</h2>
      {productos.map(prod => (
        <div key={prod.id}>
          <h3>{prod.nombre}</h3>
          <p>{prod.descripcion}</p>
          <p>Precio: ${prod.precio}</p>
          <button onClick={() => addToCart(prod, 1)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  )
}

export default ItemListContainer
