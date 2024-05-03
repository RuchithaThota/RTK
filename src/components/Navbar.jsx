import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import '../styles/navbar.css'
import { useSelector } from "react-redux"

function Navbar() {
    const { cartItems } = useSelector(state => state.cart)
    return (
        <div className="navbar">
            <h1>Redux Tool Kit</h1>
            <div className="navbar-icon-container">
                <ShoppingBagIcon width={28} />
                <div className="navbar-badge">
                    <p>{cartItems.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar