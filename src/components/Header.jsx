import React from "react"

const Header = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-content">
          <a href="navbar-logo" className="navbar-logo">§ Paragraph</a>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#" className="navbar-link">Магазин</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Библиотека</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Сообщество</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Пользователь</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
