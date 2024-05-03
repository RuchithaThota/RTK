import { useDispatch } from 'react-redux'
import '../styles/modal.css'
import { clearCart } from '../features/cart/cartSlice';
import { closeModal } from '../features/modal/modalSlice';
import { useEffect, useRef } from 'react';
function Modal() {
    const dispatch = useDispatch();
    const ref = useRef(null);
    useEffect(() => {
        function eventHandler(e) {
            if (e.target.className === 'modal-wrapper') {
                dispatch(closeModal())
            }
        }
        document.addEventListener('click', eventHandler)
        return () => {
            document.addEventListener('click', eventHandler)
        }
    }, [])
    return (
        <div className="modal-wrapper">
            <div className="modal" ref={ref}>
                <h1>Remove All Items From The Shopping Cart ?</h1>
                <div>
                    <button
                        onClick={() => {
                            dispatch(clearCart());
                            dispatch(closeModal())
                        }}
                        className='confirm-btn'>Confirm</button>
                    <button className='clear-btn'
                        onClick={() => { dispatch(closeModal()) }}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modal