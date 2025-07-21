import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"
import { useCart } from "../context/CartContext"
import ItemCount from "./ItemCount"

function ItemDetailContainer() {
  const { itemId } = useParams()
  const [item, setItem] = useState(null)
  const { addToCart } = useCart()
  const [agregado, setAgregado] = useState(false)

  useEffect(() => {
    const ref = doc(db, "Productos", itemId)

    getDoc(ref)
      .then((snap) => {
        if (snap.exists()) {
          setItem({ id: snap.id, ...snap.data() })
        }
      })
      .catch((err) => {
        console.error("Error al obtener el producto", err)
      })
  }, [itemId])

  const handleAdd = (cantidad) => {
    addToCart(item, cantidad)
    setAgregado(true)
  }

  return (
    <div>
      {item ? (
        <>
          <h2>{item.nombre}</h2>
          <p>{item.descripcion}</p>
          <p>Precio: ${item.precio}</p>
          {agregado ? (
            <p>Producto agregado al carrito</p>
          ) : (
            <ItemCount stock={10} onAdd={handleAdd} />
          )}
        </>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  )
}

export default ItemDetailContainer
