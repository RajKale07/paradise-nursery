
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'

import { removeItem, updateQuantity } from '../redux/CartSlice'
import Navbar from './Navbar'

import './CartItem.css'

function CartItem() {
    const dispatch = useDispatch()

    const cartItems = useSelector(state => state.cart.items)

    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    )

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    )

    const handleIncrease = item => {
        dispatch(
            updateQuantity({
                id: item.id,
                quantity: item.quantity + 1
            })
        )
    }

    const handleDecrease = item => {
        dispatch(
            updateQuantity({
                id: item.id,
                quantity: item.quantity - 1
            })
        )
    }

    const handleRemove = id => {
        dispatch(removeItem(id))
    }

    const handleCheckout = () => {
        alert('Thank you for shopping with Paradise Nursery! Checkout Coming Soon.')
    }

    return (
        <>
            <Navbar />

            <main className="cart-page">

                <section className="cart-header">
                    <p className="cart-eyebrow">YOUR GREEN COLLECTION</p>
                    <h1>Shopping Cart</h1>
                    <p>Review your selected plants and manage your order.</p>
                </section>

                <div className="cart-container">

                    {cartItems.length === 0 ? (

                        <div className="empty-cart">
                            <ShoppingBag size={65} strokeWidth={1.2} />

                            <h2>Your Cart is Empty</h2>

                            <p>
                                Looks like you haven't added any plants yet.
                                Discover our beautiful collection!
                            </p>

                            <Link to="/plants" className="continue-shopping-btn">
                                Explore Plants
                            </Link>
                        </div>

                    ) : (

                        <div className="cart-layout">

                            <section className="cart-products">

                                <div className="cart-products-heading">
                                    <h2>Your Selected Plants</h2>
                                    <span>{totalItems} Items</span>
                                </div>

                                {cartItems.map(item => (

                                    <article className="cart-item-card" key={item.id}>

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="cart-product-image"
                                        />

                                        <div className="cart-product-info">

                                            <h3>{item.name}</h3>

                                            <p className="cart-unit-price">
                                                Unit Price: ₹{item.price}
                                            </p>

                                            <p className="cart-item-total">
                                                Subtotal: ₹{item.price * item.quantity}
                                            </p>

                                            <div className="quantity-controls">

                                                <button
                                                    onClick={() => handleDecrease(item)}
                                                    aria-label={`Decrease ${item.name} quantity`}
                                                >
                                                    <Minus size={15} />
                                                </button>

                                                <span>{item.quantity}</span>

                                                <button
                                                    onClick={() => handleIncrease(item)}
                                                    aria-label={`Increase ${item.name} quantity`}
                                                >
                                                    <Plus size={15} />
                                                </button>

                                            </div>

                                            <button
                                                className="remove-item-btn"
                                                onClick={() => handleRemove(item.id)}
                                            >
                                                <Trash2 size={15} />
                                                Remove
                                            </button>

                                        </div>

                                        <div className="cart-line-total">
                                            ₹{item.price * item.quantity}
                                        </div>

                                    </article>

                                ))}

                                <Link to="/plants" className="continue-shopping-link">
                                    ← Continue Shopping
                                </Link>

                            </section>

                            <aside className="order-summary">

                                <h2>Order Summary</h2>

                                <div className="summary-row">
                                    <span>Total Items</span>
                                    <span>{totalItems}</span>
                                </div>

                                <div className="summary-row">
                                    <span>Subtotal</span>
                                    <span>₹{totalAmount}</span>
                                </div>

                                <div className="summary-row">
                                    <span>Delivery</span>
                                    <span className="free-delivery">FREE</span>
                                </div>

                                <div className="summary-divider"></div>

                                <div className="summary-total">
                                    <span>Total Amount</span>
                                    <strong>₹{totalAmount}</strong>
                                </div>

                                <button
                                    className="checkout-btn"
                                    onClick={handleCheckout}
                                >
                                    Proceed to Checkout
                                </button>

                                <p className="checkout-note">
                                    Secure checkout coming soon.
                                </p>

                            </aside>

                        </div>

                    )}

                </div>

            </main>
        </>
    )
}

export default CartItem
