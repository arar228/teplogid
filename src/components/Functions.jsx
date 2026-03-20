import { motion } from 'framer-motion'
import functionsImg from '../assets/functions.png'

const functions = [
  {
    icon: '🔥',
    title: 'Снижение теплопотерь',
    text: 'Минимизация расхода энергии на отопление зимой и кондиционирование летом. Особенно актуально в странах Европы с высокими тарифами на энергоносители.',
    accent: 'var(--accent-primary)'
  },
  {
    icon: '🏗️',
    title: 'Защита конструкций',
    text: 'Уменьшение температурных деформаций предотвращает появление трещин, защищает стены от промерзания и увеличивает общий срок службы здания.',
    accent: 'var(--blue)'
  },
  {
    icon: '🔇',
    title: 'Звукоизоляция',
    text: 'Материалы с волокнистой или пористой структурой отлично поглощают акустический и ударный шум — критически важно для плотно застроенных мегаполисов.',
    accent: 'var(--purple)'
  },
  {
    icon: '🛡️',
    title: 'Пожарная безопасность',
    text: 'Негорючие материалы (класс А1) локализуют очаги возгорания и увеличивают время для безопасной эвакуации людей из здания.',
    accent: 'var(--red)'
  },
  {
    icon: '🌡️',
    title: 'Микроклимат помещений',
    text: 'Поддержание стабильной температуры и предотвращение образования сырости, конденсата и плесени внутри помещений.',
    accent: 'var(--green)'
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  })
}

export default function Functions() {
  return (
    <section className="section" id="functions">
      <div className="container">
        <div className="functions-intro">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="section-label">Раздел 1.1</div>
              <h2 className="section-title">Функции<br /><span className="accent">теплоизоляции</span></h2>
              <div className="decorative-line" />
              <p className="section-subtitle">
                В современной зарубежной строительной практике теплоизоляция — это не просто
                защита от холода, а важнейшая инвестиция в энергоэффективность здания
                на протяжении всего жизненного цикла.
              </p>
            </motion.div>
          </div>
          <motion.div className="functions-intro-image"
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <img src={functionsImg} alt="Энергоэффективное здание с теплоизоляцией" />
          </motion.div>
        </div>
        <div className="functions-grid">
          {functions.map((f, i) => (
            <motion.div className="function-card" key={i}
              style={{ '--card-accent': f.accent }}
              custom={i} variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }}>
              <div className="function-card-icon" style={{ background: f.accent + '12' }}>{f.icon}</div>
              <h3 className="function-card-title">{f.title}</h3>
              <p className="function-card-text">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
