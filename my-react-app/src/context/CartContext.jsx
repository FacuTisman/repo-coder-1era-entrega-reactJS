import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (item, cantidad) => {
    const existente = cart.find(prod => prod.id === item.id)
    if (existente) {
      const actualizado = cart.map(prod =>
        prod.id === item.id
          ? { ...prod, cantidad: prod.cantidad + cantidad }
          : prod
      )
      setCart(actualizado)
    } else {
      setCart([...cart, { ...item, cantidad }])
    }
  }

  const totalCantidad = cart.reduce((acc, prod) => acc + prod.cantidad, 0)
  const totalPrecio = cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)

  const removeFromCart = (id) => {
  setCart(cart.filter(prod => prod.id !== id))
}

const clearCart = () => {
  setCart([])
}


 return (
  <CartContext.Provider value={{
    cart,
    addToCart,
    totalCantidad,
    totalPrecio,
    removeFromCart,
    clearCart
  }}>
    {children}
  </CartContext.Provider>
)

}
