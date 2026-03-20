import { motion } from 'framer-motion'
import materialsImg from '../assets/materials.png'

export default function About() {
  return (
    <section className="section section-divider" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div className="about-image-wrapper"
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <img src={materialsImg} alt="Различные виды теплоизоляционных материалов" />
          </motion.div>
          <motion.div className="about-text"
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="section-label">Введение</div>
            <h2 className="section-title">Зачем нужна<br /><span className="accent">теплоизоляция?</span></h2>
            <div className="decorative-line" />
            <p>
              Теплоизоляция — ключевой элемент энергоэффективного строительства. Без неё
              здание теряет до <strong>40% тепла</strong> через стены, крышу и фундамент.
              Качественный утеплитель окупается за 3–5 лет за счёт экономии на отоплении.
            </p>
            <p>
              Зарубежные теплоизоляционные материалы отличаются высоким качеством,
              эффективностью и экологической безопасностью. Международный опыт важен для
              модернизации строительства — западные технологии помогают повышать
              энергоэффективность и комфорт жилья.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <span className="about-feature-icon">🔥</span>
                <span className="about-feature-text">Снижение теплопотерь до 90%</span>
              </div>
              <div className="about-feature">
                <span className="about-feature-icon">💰</span>
                <span className="about-feature-text">Экономия 30–50% на отоплении</span>
              </div>
              <div className="about-feature">
                <span className="about-feature-icon">🌱</span>
                <span className="about-feature-text">Снижение CO₂ выбросов</span>
              </div>
              <div className="about-feature">
                <span className="about-feature-icon">🏠</span>
                <span className="about-feature-text">Комфорт и шумоизоляция</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
