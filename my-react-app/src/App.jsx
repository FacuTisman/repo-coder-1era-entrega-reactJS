import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Checkout from './components/Checkout' 
import Cart from './components/Cart'
import './App.css'

function AppRoutes() {
  const location = useLocation()

  return (
    <Routes location={location}>
      <Route path="/" element={<ItemListContainer />} />
      <Route
        path="/category/:categoryId"
        element={<ItemListContainer key={location.pathname} />}
      />
      <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
