
import { Routes, Route } from 'react-router-dom'

import ProductList from './components/ProductList'
import AboutUs from './components/AboutUs'
import CartItem from './components/CartItem'

import './App.css'

function Home() {
  return (
    <main className="landing-page">
      <div className="landing-overlay">

        <nav className="landing-nav">
          <h2 className="brand-name">Paradise Nursery</h2>
          <span className="brand-tagline">Bring Nature Home</span>
        </nav>

        <section className="hero-content">
          <p className="hero-label">
            WELCOME TO PARADISE NURSERY
          </p>

          <h1>
            Find Your
            <br />
            Perfect Green
            <br />
            Companion.
          </h1>

          <p className="hero-description">
            Discover beautiful houseplants and transform
            your living space into a peaceful green paradise.
            Let nature make your home happier and healthier.
          </p>

          <a href="/plants" className="get-started-btn">
            Get Started <span>→</span>
          </a>

          <a
            href="/about"
            style={{
              display: 'block',
              marginTop: '20px',
              color: 'white'
            }}
          >
            Discover Our Story
          </a>
        </section>

        <footer className="landing-footer">
          Growing happiness, one plant at a time.
        </footer>

      </div>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  )
}

export default App
