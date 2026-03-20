import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Functions from './components/Functions'
import MaterialTypes from './components/MaterialTypes'
import Characteristics from './components/Characteristics'
import EcoStandards from './components/EcoStandards'
import BrandComparison from './components/BrandComparison'
import ComparisonTable from './components/ComparisonTable'
import HouseSection from './components/HouseSection'
import Benefits from './components/Benefits'
import Sources from './components/Sources'
import Footer from './components/Footer'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container">
          <a href="#" className="nav-logo">
            <span className="nav-logo-icon">🛡️</span>
            ТеплоГид
          </a>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#about" onClick={closeMenu}>Введение</a></li>
            <li><a href="#functions" onClick={closeMenu}>Функции</a></li>
            <li><a href="#types" onClick={closeMenu}>Типы</a></li>
            <li><a href="#brands" onClick={closeMenu}>Бренды</a></li>
            <li><a href="#comparison" onClick={closeMenu}>Сравнение</a></li>
            <li><a href="#installation" onClick={closeMenu}>Монтаж</a></li>
            <li><a href="#conclusion" onClick={closeMenu}>Выводы</a></li>
            <li><a href="#sources" onClick={closeMenu}>Источники</a></li>
          </ul>
          <button className="nav-menu-btn" onClick={toggleMenu} aria-label="Меню">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <Hero />
      <About />
      <Functions />
      <MaterialTypes />
      <Characteristics />
      <EcoStandards />
      <BrandComparison />
      <ComparisonTable />
      <HouseSection />
      <Benefits />
      <Sources />
      <Footer />
    </>
  )
}

export default App
