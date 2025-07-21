import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase"
import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

function Checkout() {
  const { cart, totalPrecio, clearCart } = useCart()
  const navigate = useNavigate()

  const handleConfirmar = async () => {
    const orden = {
      comprador: {
        nombre: "Facu",
        email: "facu@email.com"
      },
      items: cart,
      total: totalPrecio,
      fecha: new Date()
    }

    try {
      const docRef = await addDoc(collection(db, "ordenes"), orden)
      clearCart()
      alert(`Compra registrada con ID: ${docRef.id}`)
      navigate("/")
    } catch (error) {
      console.error("Error al registrar compra:", error)
    }
  }

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleConfirmar}>Confirmar compra</button>
    </div>
  )
}

export default Checkout
