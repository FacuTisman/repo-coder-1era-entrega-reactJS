import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

function CartWidget() {
  const { totalCantidad } = useCart()

  return (
    <Link to="/cart">
      <IconButton aria-label="cart">
        <Badge badgeContent={totalCantidad} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Link>
  )
}

export default CartWidget
