import { motion } from 'framer-motion'

const conclusions = [
  {
    icon: '🏗️',
    title: 'Не просто утеплитель',
    text: 'Современная теплоизоляция — это высокотехнологичный продукт и важнейший элемент системы энергоменеджмента здания. Она одновременно решает задачи снижения энергопотребления, звукоизоляции и пожарной безопасности.',
    accent: 'var(--accent-primary)'
  },
  {
    icon: '📋',
    title: 'Строгие стандарты',
    text: 'Производство регламентируется жёсткими нормами EN и системой Euroclass. Это гарантирует стабильность показателей: минимальный λ, высокую прочность, долговечность и безопасность для здоровья.',
    accent: 'var(--blue)'
  },
  {
    icon: '🏭',
    title: 'Лидеры рынка',
    text: 'Rockwool, ISOVER, URSA, Paroc задают мировые тренды в устойчивом развитии: рециклинг до 80% сырья, биоразлагаемые связующие, сертификация LEED и BREEAM.',
    accent: 'var(--green)'
  },
  {
    icon: '🔧',
    title: 'Технология монтажа',
    text: 'Даже лучший утеплитель неэффективен без правильного монтажа. Зарубежный опыт требует непрерывного контура, ликвидации мостиков холода и грамотной пароизоляции.',
    accent: 'var(--purple)'
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  })
}

export default function Benefits() {
  return (
    <section className="section section-divider" id="conclusion">
      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="section-label">Итоги</div>
          <h2 className="section-title">Ключевые<br /><span className="accent">выводы</span></h2>
          <div className="decorative-line" />
          <p className="section-subtitle">
            Изучение и внедрение зарубежного опыта теплоизоляции — необходимый шаг
            для повышения энергоэффективности, экологической безопасности и комфорта зданий.
          </p>
        </motion.div>
        <div className="conclusion-grid">
          {conclusions.map((c, i) => (
            <motion.div className="conclusion-card" key={i}
              style={{ '--card-accent': c.accent }}
              custom={i} variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }}>
              <div className="conclusion-icon" style={{ background: c.accent + '12' }}>{c.icon}</div>
              <h3 className="conclusion-card-title">{c.title}</h3>
              <p className="conclusion-card-text">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
