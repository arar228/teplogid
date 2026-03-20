import { motion } from 'framer-motion'
import ecoImg from '../assets/eco.png'

const ecoItems = [
  {
    icon: '📜',
    title: 'Директива EPBD и стандарт NZEB',
    text: 'В ЕС действует директива об энергоэффективности зданий (EPBD), обязывающая возводить здания с почти нулевым потреблением энергии (NZEB). Это стимулирует применение высокотехнологичной изоляции.'
  },
  {
    icon: '🧪',
    title: 'Безопасность для здоровья',
    text: 'Современные утеплители производятся с биоразлагаемыми связующими, без формальдегида. Обязательным стал расчёт жизненного цикла (LCA — Life Cycle Assessment) от добычи сырья до утилизации.'
  },
  {
    icon: '♻️',
    title: 'Рециклинг и замкнутый цикл',
    text: 'Стекловата ведущих брендов до 70–80% состоит из переработанного стеклобоя. Многие производители организуют сбор обрезков со стройплощадок для возврата в производство.'
  },
  {
    icon: '🚀',
    title: 'Аэрогели и VIP-панели',
    text: 'Аэрогели, изначально разработанные для аэрокосмической отрасли, адаптируются для строительства. Вакуумные панели (VIP) обеспечивают изоляцию в 5–10 раз лучше традиционных материалов.'
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  })
}

export default function EcoStandards() {
  return (
    <section className="section section-divider" id="eco">
      <div className="container">
        <div className="eco-grid">
          <motion.div className="eco-image-wrapper"
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <img src={ecoImg} alt="Экологичное производство утеплителей" />
          </motion.div>
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="section-label">Раздел 1.4</div>
              <h2 className="section-title">Экологические стандарты<br />и <span className="accent">инновации</span></h2>
              <div className="decorative-line" />
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                Главный тренд зарубежного рынка — экологичность, устойчивое развитие
                и снижение углеродного следа на всех этапах производства.
              </p>
            </motion.div>
            <div className="eco-items">
              {ecoItems.map((item, i) => (
                <motion.div className="eco-item" key={i}
                  custom={i} variants={fadeUp} initial="hidden" whileInView="visible"
                  viewport={{ once: true }}>
                  <div className="eco-item-header">
                    <span className="eco-item-icon">{item.icon}</span>
                    <h3 className="eco-item-title">{item.title}</h3>
                  </div>
                  <p className="eco-item-text">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
