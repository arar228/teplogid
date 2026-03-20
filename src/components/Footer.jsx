export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>🛡️ ТеплоГид</h3>
            <p>
              Информационный ресурс о зарубежных теплоизоляционных материалах.
              Исследование возможностей эффективного применения в строительной практике
              с целью повышения энергоэффективности зданий.
              Данные из официальных каталогов производителей.
            </p>
          </div>
          <div className="footer-col">
            <h4>Навигация</h4>
            <a href="#about">Введение</a>
            <a href="#functions">Функции</a>
            <a href="#types">Классификация</a>
            <a href="#characteristics">Характеристики</a>
            <a href="#brands">Бренды</a>
            <a href="#installation">Монтаж</a>
            <a href="#conclusion">Выводы</a>
          </div>
          <div className="footer-col">
            <h4>Официальные сайты</h4>
            <a href="https://www.rockwool.com" target="_blank" rel="noopener noreferrer">Rockwool ↗</a>
            <a href="https://www.isover.com" target="_blank" rel="noopener noreferrer">ISOVER ↗</a>
            <a href="https://www.ursa.com" target="_blank" rel="noopener noreferrer">URSA ↗</a>
            <a href="https://www.paroc.com" target="_blank" rel="noopener noreferrer">Paroc ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 ТеплоГид — учебный проект. Данные из каталогов производителей. Не является рекламой.
        </div>
      </div>
    </footer>
  )
}
