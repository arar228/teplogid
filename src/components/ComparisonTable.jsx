import { motion } from 'framer-motion'

const tableData = [
  {
    brand: 'Rockwool',
    type: 'Каменная вата',
    lambda: '0.034–0.041',
    fire: 'А1 (негорючий)',
    fireBadge: 'green',
    density: '30–200 кг/м³',
    lifespan: '50+ лет',
    eco: 'Greenguard Gold',
    ecoBadge: 'green',
    use: 'Фасады, кровли, полы',
    price: '$$–$$$'
  },
  {
    brand: 'ISOVER',
    type: 'Стекло/каменная вата',
    lambda: '0.032–0.044',
    fire: 'А1–А2',
    fireBadge: 'green',
    density: '11–200 кг/м³',
    lifespan: '50+ лет',
    eco: 'EPD сертификат',
    ecoBadge: 'blue',
    use: 'Универсальное',
    price: '$$'
  },
  {
    brand: 'URSA',
    type: 'XPS / минвата',
    lambda: '0.029–0.040',
    fire: 'Б–В1 (XPS)',
    fireBadge: 'amber',
    density: '15–45 кг/м³',
    lifespan: '50+ лет',
    eco: 'ISO 14001',
    ecoBadge: 'blue',
    use: 'Фундаменты, цоколи',
    price: '$$'
  },
  {
    brand: 'Paroc',
    type: 'Каменная вата',
    lambda: '0.033–0.042',
    fire: 'А1 (негорючий)',
    fireBadge: 'green',
    density: '30–170 кг/м³',
    lifespan: '50+ лет',
    eco: 'Nordic Ecolabel',
    ecoBadge: 'green',
    use: 'Северный климат',
    price: '$$–$$$'
  }
]

export default function ComparisonTable() {
  return (
    <section className="section section-divider" id="comparison">
      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="section-label">Сравнение</div>
          <h2 className="section-title">Таблица сравнения<br /><span className="accent">характеристик</span></h2>
          <div className="decorative-line" />
          <p className="section-subtitle">
            Ключевые параметры четырёх ведущих брендов. Коэффициент λ —
            чем ниже значение, тем лучше материал сохраняет тепло.
          </p>
        </motion.div>
        <motion.div className="comparison-table-wrapper"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Бренд</th>
                <th>Тип</th>
                <th>λ, Вт/(м·К)</th>
                <th>Горючесть</th>
                <th>Плотность</th>
                <th>Срок</th>
                <th>Экология</th>
                <th>Цена</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i}>
                  <td className="brand-name-cell">{row.brand}</td>
                  <td>{row.type}</td>
                  <td><strong>{row.lambda}</strong></td>
                  <td><span className={`table-badge ${row.fireBadge}`}>{row.fire}</span></td>
                  <td>{row.density}</td>
                  <td>{row.lifespan}</td>
                  <td><span className={`table-badge ${row.ecoBadge}`}>{row.eco}</span></td>
                  <td>{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 20 }}>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text-secondary)' }}>💡 Подсказка:</strong>{' '}
            Наличие международных сертификатов (LEED, BREEAM), строгая стандартизация
            и заявленный срок службы от 50 лет — общие конкурентные преимущества зарубежных материалов.
          </div>
        </div>
      </div>
    </section>
  )
}
