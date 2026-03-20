import { motion } from 'framer-motion'
import brandsImg from '../assets/brands.png'

const brands = [
  {
    name: 'Rockwool',
    country: '🇩🇰 Дания, с 1937 г.',
    color: '#C62828',
    logo: '🔴',
    desc: 'Мировой лидер в производстве каменной (базальтовой) ваты. Высочайшая пожаробезопасность (температура плавления волокон свыше 1000°C), отличные звукоизоляционные свойства и долговечность. Акцент на экологичности и полной переработке продукции.',
    specs: [
      { label: 'Теплопроводность', value: '0.034–0.041', percent: 88, color: 'var(--green)' },
      { label: 'Огнестойкость', value: 'Класс А1', percent: 100, color: 'var(--accent-primary)' },
      { label: 'Звукоизоляция', value: 'до 60 дБ', percent: 92, color: 'var(--blue)' },
      { label: 'Долговечность', value: '50+ лет', percent: 95, color: 'var(--green)' }
    ],
    products: ['ROCKTON', 'ЛАЙТ БАТТС', 'ФАСАД БАТТС', 'РУФФ БАТТС', 'АКУСТИК БАТТС'],
    priceRange: '$$–$$$'
  },
  {
    name: 'ISOVER (Saint-Gobain)',
    country: '🇫🇷 Франция, с 1937 г.',
    color: '#F9A825',
    logo: '🟡',
    desc: 'Один из старейших брендов теплоизоляции. Специализируется на минеральной вате на основе кварца. Исключительная упругость — монтаж враспор без крепежа. Концепция «Мультикомфорт»: тепло-, звукоизоляция и качество воздуха.',
    specs: [
      { label: 'Теплопроводность', value: '0.032–0.044', percent: 85, color: 'var(--green)' },
      { label: 'Огнестойкость', value: 'Класс А1–А2', percent: 95, color: 'var(--accent-primary)' },
      { label: 'Упругость', value: 'до 50% компрессия', percent: 90, color: 'var(--blue)' },
      { label: 'Доступность', value: 'Широкая сеть', percent: 96, color: 'var(--green)' }
    ],
    products: ['ОПТИМАЛ', 'ТЁПЛЫЙ ДОМ', 'КЛАССИК', 'СКАТНАЯ КРОВЛЯ', 'ШТУКАТУРНЫЙ ФАСАД'],
    priceRange: '$$'
  },
  {
    name: 'URSA',
    country: '🇪🇸 Испания',
    color: '#1565C0',
    logo: '🔵',
    desc: 'Ведущий производитель экструдированного пенополистирола (XPS) и минеральной изоляции. URSA XPS обладает практически нулевым водопоглощением и высокой прочностью на сжатие — незаменим для фундаментов, цоколей и инверсионных кровель.',
    specs: [
      { label: 'Теплопроводность', value: '0.029–0.040', percent: 90, color: 'var(--green)' },
      { label: 'Водопоглощение', value: '≈ 0%', percent: 98, color: 'var(--blue)' },
      { label: 'Прочность на сжатие', value: '250+ кПа', percent: 92, color: 'var(--accent-primary)' },
      { label: 'Морозостойкость', value: 'Высокая', percent: 88, color: 'var(--purple)' }
    ],
    products: ['URSA XPS', 'URSA GEO', 'URSA TERRA', 'URSA PUREONE'],
    priceRange: '$$'
  },
  {
    name: 'Paroc',
    country: '🇫🇮 Финляндия, с 1963 г.',
    color: '#7B1FA2',
    logo: '🟣',
    desc: 'Производитель энергоэффективной базальтовой изоляции для суровых северных условий. Высокая плотность, стабильность размеров и строгий контроль качества по скандинавским стандартам. Фокус на морском и оффшорном строительстве.',
    specs: [
      { label: 'Теплопроводность', value: '0.033–0.042', percent: 90, color: 'var(--green)' },
      { label: 'Огнестойкость', value: 'Класс А1', percent: 100, color: 'var(--accent-primary)' },
      { label: 'Морозостойкость', value: 'до −60°C', percent: 100, color: 'var(--blue)' },
      { label: 'Плотность', value: 'до 170 кг/м³', percent: 88, color: 'var(--purple)' }
    ],
    products: ['eXtra', 'LINIO', 'ROS', 'CORTEX', 'MARINE'],
    priceRange: '$$–$$$'
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  })
}

export default function BrandComparison() {
  return (
    <section className="section" id="brands">
      <div className="container">
        <div className="brands-intro">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="section-label">Раздел 2.1</div>
            <h2 className="section-title">Ведущие зарубежные<br /><span className="accent">производители</span></h2>
            <div className="decorative-line" />
            <p className="section-subtitle">
              Лидирующие позиции занимают крупные транснациональные корпорации.
              Их преимущество — не только качество материала, но и комплексный
              инженерный подход с готовыми системными решениями.
            </p>
          </motion.div>
          <motion.div className="brands-intro-image"
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <img src={brandsImg} alt="Производство теплоизоляционных материалов" />
          </motion.div>
        </div>
        <div className="brands-grid">
          {brands.map((b, i) => (
            <motion.div className="brand-card" key={i}
              style={{ '--brand-glow': b.color + '10' }}
              custom={i} variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }}>
              <div className="brand-header">
                <div className="brand-logo" style={{ background: b.color + '18', color: b.color }}>
                  {b.logo}
                </div>
                <div className="brand-info">
                  <h3>{b.name}</h3>
                  <span className="brand-country">{b.country}</span>
                </div>
                <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {b.priceRange}
                </span>
              </div>
              <p className="brand-desc">{b.desc}</p>
              <div className="brand-specs">
                {b.specs.map((s, j) => (
                  <div className="brand-spec" key={j}>
                    <span className="brand-spec-label">{s.label}</span>
                    <div className="brand-spec-bar">
                      <div className="brand-spec-bar-fill" style={{ width: s.percent + '%', background: s.color }} />
                    </div>
                    <span className="brand-spec-value">{s.value}</span>
                  </div>
                ))}
              </div>
              <div className="brand-products">
                {b.products.map((p, k) => (
                  <span className="brand-product-tag" key={k}>{p}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
