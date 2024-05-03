/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux"
import Navbar from "./components/Navbar"
import './styles/root.css'
import CartList from "./components/CartList"
import Footer from "./components/Footer"
import Modal from "./components/Modal"
import { useEffect } from "react"
import { getCartItems } from "./features/cart/cartSlice"

function App() {
  const { isOpen } = useSelector(state => state.modal)
  const { isLoading } = useSelector(state => state.cart)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems('Hello...'))
  }, [])
  if (isLoading) {
    return <h1>Loading....</h1>
  }
  return (
    <div id='root'>
      <Navbar />
      <div className="cart-container">
        <CartList />
      </div>
      <Footer />
      {isOpen && <Modal />}
    </div>
  )
}

export default App
