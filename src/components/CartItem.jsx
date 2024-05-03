/* eslint-disable react/prop-types */
import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { ChevronUpIcon } from "@heroicons/react/24/solid"
import '../styles/cartItem.css'
import { useDispatch } from "react-redux"
import { decrementItem, incrementItem, removeItem } from "../features/cart/cartSlice";

function CartItem({ id, title, images, amount, price }) {
    const dispatch = useDispatch();
    const handleRemoveItem = () => {
        dispatch(removeItem(id))
    }
    const increase = () => {
        dispatch(incrementItem({ id }))
    }
    const decrease = () => {
        if (amount === 1) {
            dispatch(removeItem(id))
            return;
        }
        dispatch(decrementItem({ id }))
    }
    return (
        <div className="cartItem">
            <div className="cartItem-details">
                <div className="cartItem-img-cont">
                    <img src={images[0]} alt={title} />
                </div>
                <div className="cartItem-info">
                    <h1>{title}</h1>
                    <p>${' '}{price}</p>
                    <button onClick={handleRemoveItem}>remove</button>
                </div>
            </div>
            <div className="cartItem-actions">
                <button onClick={increase}>
                    <ChevronUpIcon width={16} />
                </button>
                <p>{amount}</p>
                <button onClick={decrease}>
                    <ChevronDownIcon width={16} />
                </button>
            </div>
        </div>
    )
}

export default CartItem