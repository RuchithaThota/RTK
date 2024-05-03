/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem";
import '../styles/cart.css'
import { useEffect } from "react";
import { cartSummary } from "../features/cart/cartSlice";

function CartList() {
    const { cartItems } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(cartSummary())
    }, [cartItems])
    return (
        <div>
            <h1 className="cart-heading">Your Bag</h1>
            {cartItems.length === 0 ?
                <p className="cart-empty">is empty currently.</p> :
                <div className="cartlist">
                    {
                        cartItems.map((item) => {
                            return <CartItem key={item.id} {...item} />
                        })
                    }
                </div>
            }
        </div>
    )
}

export default CartList