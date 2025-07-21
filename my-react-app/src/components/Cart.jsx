import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

function Cart() {
  const { cart, totalPrecio, removeFromCart, clearCart } = useCart()
  const navigate = useNavigate()

  const handleFinalizar = () => {
    navigate("/checkout")
  }

  return (
    <div>
      <h2>Tu carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos.</p>
      ) : (
        <>
          <ul>
            {cart.map((prod) => (
              <li key={prod.id}>
                {prod.nombre} x {prod.cantidad} = ${prod.precio * prod.cantidad}
                <button onClick={() => removeFromCart(prod.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrecio}</h3>
          <button onClick={clearCart}>Vaciar carrito</button>
          <button onClick={handleFinalizar}>Finalizar compra</button>
        </>
      )}
    </div>
  )
}

export default Cart
