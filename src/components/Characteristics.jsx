import { motion } from 'framer-motion'

const characteristics = [
  {
    icon: '🌡️',
    bgColor: 'rgba(245, 158, 11, 0.08)',
    title: 'Теплопроводность (λ)',
    subtitle: 'Главный показатель',
    text: 'Коэффициент теплопроводности — ключевой параметр эффективности. Чем он ниже, тем лучше материал удерживает тепло. У современных зарубежных образцов: 0,020–0,040 Вт/(м·К).',
    value: '0.020–0.040',
    valueLabel: 'Вт/(м·К)',
    valueBg: 'rgba(245, 158, 11, 0.1)',
    valueColor: 'var(--accent-primary)'
  },
  {
    icon: '⚖️',
    bgColor: 'rgba(59, 130, 246, 0.08)',
    title: 'Плотность и прочность',
    subtitle: 'Механические свойства',
    text: 'Для плоских кровель и фундаментов критически важна прочность на сжатие (лидируют XPS и жёсткая минвата). Для каркасных стен важнее упругость и способность держаться «в распор».',
    value: '28–200 кг/м³',
    valueLabel: 'диапазон',
    valueBg: 'rgba(59, 130, 246, 0.1)',
    valueColor: 'var(--blue)'
  },
  {
    icon: '💧',
    bgColor: 'rgba(6, 182, 212, 0.08)',
    title: 'Водопоглощение',
    subtitle: 'Влагостойкость',
    text: 'Влага вытесняет воздух из пор, а вода проводит тепло в 20 раз лучше воздуха. Зарубежные бренды активно используют гидрофобизирующие добавки для защиты.',
    value: '< 1%',
    valueLabel: 'у лучших',
    valueBg: 'rgba(6, 182, 212, 0.1)',
    valueColor: 'var(--cyan)'
  },
  {
    icon: '💨',
    bgColor: 'rgba(139, 92, 246, 0.08)',
    title: 'Паропроницаемость',
    subtitle: 'Коэффициент µ',
    text: 'Способность пропускать водяной пар оценивается коэффициентом µ. Правильный подбор материалов исключает образование конденсата внутри стен — «дышащая» конструкция.',
    value: 'µ = 1–200',
    valueLabel: 'в зависимости от типа',
    valueBg: 'rgba(139, 92, 246, 0.1)',
    valueColor: 'var(--purple)'
  },
  {
    icon: '🔥',
    bgColor: 'rgba(239, 68, 68, 0.08)',
    title: 'Горючесть',
    subtitle: 'Euroclass EN 13501-1',
    text: 'Европейская система строго делит материалы на классы от A1 (негорючие) до F. Стандарты учитывают дымообразование и образование горящих капель при пожаре.',
    value: 'A1 → F',
    valueLabel: 'классификация',
    valueBg: 'rgba(239, 68, 68, 0.1)',
    valueColor: 'var(--red)'
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  })
}

export default function Characteristics() {
  return (
    <section className="section" id="characteristics">
      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="section-label">Раздел 1.3</div>
          <h2 className="section-title">Физико-технические<br /><span className="accent">характеристики</span></h2>
          <div className="decorative-line" />
          <p className="section-subtitle">
            При проектировании и выборе зарубежных материалов инженеры опираются
            на строгие физические параметры, задокументированные в международных сертификатах.
          </p>
        </motion.div>
        <div className="chars-grid">
          {characteristics.map((c, i) => (
            <motion.div className="char-card" key={i}
              custom={i} variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }}>
              <div className="char-card-header">
                <div className="char-card-icon" style={{ background: c.bgColor }}>{c.icon}</div>
                <div>
                  <div className="char-card-title">{c.title}</div>
                  <div className="char-card-subtitle">{c.subtitle}</div>
                </div>
              </div>
              <p className="char-card-text">{c.text}</p>
              <div className="char-card-value" style={{ background: c.valueBg, color: c.valueColor }}>
                {c.value} <span style={{ fontWeight: 400, opacity: 0.7, fontSize: '0.75rem' }}>{c.valueLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
