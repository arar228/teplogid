import { motion } from 'framer-motion'

const sources = [
  {
    text: 'Бобров, Ю. Л. Теплоизоляционные материалы и конструкции : учебник для вузов / Ю. Л. Бобров, Е. Г. Овчаренко, Б. М. Шойхет, Е. Ю. Петухова. – Москва : ИНФРА-М, 2021. – 268 с.'
  },
  {
    text: 'Жуков, А. Д. Современные строительные материалы. Теплоизоляционные материалы : учебное пособие / А. Д. Жуков. – Москва : МГСУ, 2019. – 144 с.'
  },
  {
    text: 'Корниенко, С. В. Энергосбережение и тепловая защита зданий : монография / С. В. Корниенко. – Санкт-Петербург : Лань, 2022. – 256 с.'
  },
  {
    text: 'Умнякова, Н. П. Тепловая защита зданий: зарубежный опыт и европейские стандарты / Н. П. Умнякова // Строительные материалы. – 2023. – № 3. – С. 15–21.'
  },
  {
    text: 'EN 13162:2012+A1:2015. Thermal insulation products for buildings — Factory made mineral wool (MW) products — Specification.'
  },
  {
    text: 'EN 13501-1:2018. Fire classification of construction products and building elements — Part 1: Classification using data from reaction to fire tests.'
  },
  {
    text: 'Официальный сайт ISOVER (Saint-Gobain)',
    url: 'https://www.isover.com'
  },
  {
    text: 'Официальный сайт Paroc',
    url: 'https://www.paroc.com'
  },
  {
    text: 'Официальный сайт ROCKWOOL Group',
    url: 'https://www.rockwool.com'
  },
  {
    text: 'Официальный сайт URSA',
    url: 'https://www.ursa.com'
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  })
}

export default function Sources() {
  return (
    <section className="section" id="sources">
      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="section-label">Библиография</div>
          <h2 className="section-title">Список использованных<br /><span className="accent">источников</span></h2>
          <div className="decorative-line" />
        </motion.div>
        <div className="sources-list">
          {sources.map((s, i) => (
            <motion.div className="source-item" key={i}
              custom={i} variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }}>
              <span className="source-number">{i + 1}</span>
              <p className="source-text">
                {s.text}
                {s.url && (
                  <> — <a href={s.url} target="_blank" rel="noopener noreferrer">{s.url} ↗</a></>
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
