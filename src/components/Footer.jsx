import { useDispatch, useSelector } from "react-redux"
import '../styles/footer.css'
import { openModal } from "../features/modal/modalSlice";

function Footer() {
    const { total } = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(openModal())
    }
    return (
        <div className="footer">
            <div className="footer-section-one">
                <h1>Total</h1>
                <p>${total.toFixed(2)}</p>
            </div>
            <div className="footer-section-two">
                <button onClick={handleClearCart}
                    style={{ cursor: total === 0 ? 'not-allowed' : 'pointer' }}
                    disabled={total === 0}>Clear Cart</button>
            </div>
        </div>
    )
}

export default Footer