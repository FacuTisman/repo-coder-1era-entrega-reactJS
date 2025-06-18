import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <header>
      <h1>
        <Link to="/">Hamburguesería Tisman</Link>
      </h1>

      <nav className="grid">
        <Link className="hijo" to="/category/hamburguesas">Hamburguesas</Link>
        <Link className="hijo" to="/category/papas">Loaded Fries</Link>
        <Link className="hijo" to="/category/tragos">Tragos</Link>
        <CartWidget />
      </nav>
    </header>
  )
}

export default NavBar
