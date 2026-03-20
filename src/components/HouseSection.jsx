import { motion } from 'framer-motion'
import houseImg from '../assets/house.png'

const tips = [
  {
    title: 'Борьба с «мостиками холода»',
    text: 'Создание непрерывного теплоизоляционного контура здания. Стыки плит, углы, узлы примыкания окон и дверей тщательно изолируются. XPS-плиты в фундаментах надёжно отсекают холод от промерзающего грунта.'
  },
  {
    title: 'Штукатурные фасады (СФТК)',
    text: 'Применяются жёсткие плиты из каменной ваты (Rockwool, Paroc), выдерживающие вес армирующего и штукатурного слоёв. Высокая паропроницаемость позволяет стенам «дышать».'
  },
  {
    title: 'Вентилируемые фасады',
    text: 'Минеральная вата с ветрозащитным покрытием из стеклохолста. Предотвращает выдувание волокон утеплителя потоками воздуха в вентиляционном зазоре.'
  },
  {
    title: 'Защита от влаги',
    text: 'Пароизоляционная плёнка со стороны тёплого помещения и диффузионная мембрана со стороны улицы. Утеплитель эффективен только в сухом состоянии.'
  },
  {
    title: 'PIR-плиты в кровлях',
    text: 'В коммерческом строительстве PIR-плиты (пенополиизоцианурат) обеспечивают минимальную теплопроводность при малой толщине и весе, снижая нагрузку на конструкции.'
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  })
}

export default function HouseSection() {
  return (
    <section className="section house-section" id="installation">
      <div className="container">
        <div className="house-grid">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="section-label">Раздел 2.2</div>
              <h2 className="section-title">Монтаж и<br /><span className="accent">применение</span></h2>
              <div className="decorative-line" />
              <p className="section-subtitle">
                Зарубежные технологии строго регламентируют требования не только к материалам,
                но и к способам их монтажа — стандарт Passive House.
              </p>
            </motion.div>
            <div className="house-tips">
              {tips.map((tip, i) => (
                <motion.div className="house-tip" key={i}
                  custom={i} variants={fadeUp} initial="hidden" whileInView="visible"
                  viewport={{ once: true }}>
                  <div className="house-tip-number">{i + 1}</div>
                  <div className="house-tip-text">
                    <h4>{tip.title}</h4>
                    <p>{tip.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div className="house-image-wrapper"
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <img src={houseImg} alt="Схема утепления дома — разрез с видимыми слоями" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
