import { motion } from 'framer-motion'

const types = [
  {
    icon: '🧱',
    name: 'Минеральная вата',
    desc: 'Базальтовая и кварцевая (стекловата). Производится из расплава горных пород при 1500°C. Негорючая (А1), отличная звукоизоляция, паропроницаемость.',
    lambda: 'λ = 0.032–0.045 Вт/(м·К)',
    detail: 'Устойчива к сверхвысоким температурам. Идеальна для фасадов, перегородок, кровель.'
  },
  {
    icon: '🧊',
    name: 'Экструдированный пенополистирол (XPS)',
    desc: 'Жёсткие плиты с закрытоячеистой структурой, произведённые методом экструзии. Нулевое водопоглощение и высокая прочность на сжатие.',
    lambda: 'λ = 0.028–0.034 Вт/(м·К)',
    detail: 'Идеален для фундаментов, цоколей, плоских кровель. Прочность 250–700 кПа.'
  },
  {
    icon: '💨',
    name: 'Пенополиуретан (PUR/PIR)',
    desc: 'Наиболее эффективный утеплитель. PIR-панели с фольгированной облицовкой — стандарт для коммерческих зданий Европы.',
    lambda: 'λ = 0.020–0.028 Вт/(м·К)',
    detail: 'PIR выдерживает нагрев до 200°C. Минимальная толщина при максимальной эффективности.'
  },
  {
    icon: '🌿',
    name: 'Эко-изоляция',
    desc: 'Набирающий популярность сегмент: древесное волокно, пробковая изоляция, конопляные маты, овечья шерсть. Естественно регулируют влажность.',
    lambda: 'λ = 0.035–0.050 Вт/(м·К)',
    detail: 'Полностью биоразлагаемые. Популярны в Скандинавии и Центральной Европе.'
  },
  {
    icon: '🔬',
    name: 'Пеностекло',
    desc: 'Премиальный материал из вспененного стекла. Абсолютно негорючий, водо-газонепроницаемый, не подвержен биологическому разрушению.',
    lambda: 'λ = 0.038–0.050 Вт/(м·К)',
    detail: 'Срок службы более 100 лет. Идеален для подземных сооружений.'
  },
  {
    icon: '⚡',
    name: 'VIP и аэрогели',
    desc: 'Инновационные материалы. Вакуумные панели (VIP) работают по принципу термоса — изоляция в 5–10 раз лучше традиционных при той же толщине.',
    lambda: 'λ = 0.004–0.020 Вт/(м·К)',
    detail: 'Из аэрокосмической отрасли в гражданское строительство.'
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  })
}

export default function MaterialTypes() {
  return (
    <section className="section section-divider" id="types">
      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="section-label">Раздел 1.2</div>
          <h2 className="section-title">Классификация<br /><span className="accent">материалов</span></h2>
          <div className="decorative-line" />
          <p className="section-subtitle">
            Зарубежный рынок предлагает огромный выбор утеплителей, классифицируемых
            по виду исходного сырья: неорганические, органические, эко-изоляция
            и инновационные решения.
          </p>
        </motion.div>
        <div className="types-grid">
          {types.map((t, i) => (
            <motion.div className="type-card" key={i}
              custom={i} variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }}>
              <div className="type-card-icon">{t.icon}</div>
              <h3 className="type-card-name">{t.name}</h3>
              <p className="type-card-desc">{t.desc}</p>
              <p className="type-card-desc" style={{ marginTop: 10, fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                {t.detail}
              </p>
              <div className="type-card-lambda">{t.lambda}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
