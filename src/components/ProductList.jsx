
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/CartSlice'
import Navbar from './Navbar'
import './ProductList.css'

const plantCategories = [
    {
        category: 'Air Purifying Plants',
        description: 'Breathe cleaner and fresher air with these beautiful plants.',
        plants: [
            {
                id: 1,
                name: 'Snake Plant',
                price: 299,
                image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=600'
            },
            {
                id: 2,
                name: 'Peace Lily',
                price: 399,
                image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=600&sat=-40'
            },
            {
                id: 3,
                name: 'Spider Plant',
                price: 249,
                image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c9a3?w=600'
            },
            {
                id: 4,
                name: 'Areca Palm',
                price: 499,
                image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=600'
            },
            {
                id: 5,
                name: 'Rubber Plant',
                price: 449,
                image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600'
            },
            {
                id: 6,
                name: 'Boston Fern',
                price: 349,
                image: 'https://images.unsplash.com/photo-1597055181300-a8f4c5b0b6e6?w=600'
            }
        ]
    },

    {
        category: 'Indoor Decorative Plants',
        description: 'Add natural beauty and elegance to your interiors.',
        plants: [
            {
                id: 7,
                name: 'Monstera Deliciosa',
                price: 599,
                image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600'
            },
            {
                id: 8,
                name: 'Fiddle Leaf Fig',
                price: 799,
                image: 'https://images.unsplash.com/photo-1597055181300-a8f4c5b0b6e6?w=600'
            },
            {
                id: 9,
                name: 'Calathea',
                price: 449,
                image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600'
            },
            {
                id: 10,
                name: 'Philodendron',
                price: 399,
                image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600'
            },
            {
                id: 11,
                name: 'Bird of Paradise',
                price: 899,
                image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=600'
            },
            {
                id: 12,
                name: 'ZZ Plant',
                price: 499,
                image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&sat=-20'
            }
        ]
    },

    {
        category: 'Succulents and Cacti',
        description: 'Small, charming plants that are easy to care for.',
        plants: [
            {
                id: 13,
                name: 'Aloe Vera',
                price: 199,
                image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600'
            },
            {
                id: 14,
                name: 'Jade Plant',
                price: 249,
                image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600'
            },
            {
                id: 15,
                name: 'Echeveria',
                price: 179,
                image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600'
            },
            {
                id: 16,
                name: 'Golden Barrel Cactus',
                price: 299,
                image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600'
            },
            {
                id: 17,
                name: 'Haworthia',
                price: 199,
                image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600'
            },
            {
                id: 18,
                name: 'String of Pearls',
                price: 349,
                image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=600'
            }
        ]
    }
]

function ProductList() {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.items)

    const [selectedCategory, setSelectedCategory] = useState('All')

    const categories = [
        'All',
        ...plantCategories.map(category => category.category)
    ]

    const visibleCategories =
        selectedCategory === 'All'
            ? plantCategories
            : plantCategories.filter(
                category => category.category === selectedCategory
            )

    const handleAddToCart = plant => {
        dispatch(addItem(plant))
    }

    const isInCart = id =>
        cartItems.some(item => item.id === id)

    return (
        <>
            <Navbar />

            <main className="product-page">
                <section className="product-heading">
                    <p className="product-eyebrow">GROW YOUR OWN PARADISE</p>
                    <h1>Discover Our Plants</h1>
                    <p>
                        Bring home the beauty of nature with our carefully
                        selected collection of indoor plants.
                    </p>
                </section>

                <div className="category-filter">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={
                                selectedCategory === category
                                    ? 'category-btn active'
                                    : 'category-btn'
                            }
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {visibleCategories.map(category => (
                    <section className="plant-category" key={category.category}>
                        <div className="category-heading">
                            <h2>{category.category}</h2>
                            <p>{category.description}</p>
                        </div>

                        <div className="plant-grid">
                            {category.plants.map(plant => (
                                <article className="plant-card" key={plant.id}>
                                    <div className="plant-image-container">
                                        <img
                                            src={plant.image}
                                            alt={plant.name}
                                            className="plant-image"
                                            loading="lazy"
                                        />
                                        <span className="plant-tag">Indoor Plant</span>
                                    </div>

                                    <div className="plant-details">
                                        <h3>{plant.name}</h3>

                                        <p className="plant-price">
                                            ₹{plant.price}
                                        </p>

                                        <button
                                            className="add-cart-btn"
                                            disabled={isInCart(plant.id)}
                                            onClick={() => handleAddToCart(plant)}
                                        >
                                            {isInCart(plant.id)
                                                ? 'Added to Cart'
                                                : 'Add to Cart'}
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                ))}

                <footer className="product-footer">
                    Paradise Nursery | Growing happiness, one plant at a time.
                </footer>
            </main>
        </>
    )
}

export default ProductList
