import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import heroImg from '../assets/hero.png'

function AnimatedNumber({ target, suffix = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const duration = 2200
    const startTime = performance.now()
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(ease * target)
      if (ref.current) ref.current.textContent = current.toLocaleString('ru-RU') + suffix
      if (progress < 1) requestAnimationFrame(step)
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        requestAnimationFrame(step)
        observer.disconnect()
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, suffix])
  return <span className="hero-stat-number" ref={ref}>0</span>
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }} />
      <div className="hero-overlay" />
      <div className="hero-glow" />
      <div className="hero-grain" />

      <div className="hero-content container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}>
          <div className="hero-badge">📋 Индивидуальный учебный проект</div>
        </motion.div>

        <motion.h1 className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}>
          <span className="accent">Зарубежные</span><br />
          теплоизоляционные материалы
        </motion.h1>

        <motion.p className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          Исследование возможностей эффективного применения зарубежных
          теплоизоляционных материалов в строительной практике
          с целью повышения энергетической эффективности зданий.
        </motion.p>

        <motion.div className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}>
          <div className="hero-stat">
            <AnimatedNumber target={40} suffix="%" />
            <span className="hero-stat-label">теплопотери без изоляции</span>
          </div>
          <div className="hero-stat">
            <AnimatedNumber target={50} suffix=" лет" />
            <span className="hero-stat-label">срок службы материалов</span>
          </div>
          <div className="hero-stat">
            <AnimatedNumber target={90} suffix="%" />
            <span className="hero-stat-label">экономия при утеплении</span>
          </div>
        </motion.div>
      </div>

      <div className="hero-scroll">
        <span>Листайте</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
