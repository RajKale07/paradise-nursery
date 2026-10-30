
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ShoppingCart, Leaf } from 'lucide-react'

function Navbar() {
    const cartItems = useSelector(state => state.cart.items)

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    )

    return (
        <nav className="shop-navbar">
            <Link to="/" className="shop-brand">
                <Leaf size={25} />
                <span>Paradise Nursery</span>
            </Link>

            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/plants">Plants</NavLink>

                <NavLink to="/cart" className="cart-nav-link">
                    <ShoppingCart size={21} />
                    <span>Cart</span>
                    <span className="cart-count">{totalItems}</span>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar

