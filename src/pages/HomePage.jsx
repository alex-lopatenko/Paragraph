import React from "react"
import '../assets/scss/pages/home.scss'

import layer0001 from '../assets/images/01.jpg';
import layer0002 from '../assets/images/02.jpg';
import layer0003 from '../assets/images/03.jpg';

export { layer0001, layer0002, layer0003 };

const HomePage = () => {
  return (
    <div className="container">
      <div class="home__wrapper">
        <nav class="home__navbar">
          <ul class="home__navbar-list">
            <div class="home__navbar-title">Категории</div>
            <li class="home__navbar-item">
              <a href="#" class="home__navbar-link">Книги</a>
            </li>
            <li class="home__navbar-item">
              <a href="#" class="home__navbar-link">Журналы</a>
            </li>
            <li class="home__navbar-item">
              <a href="#" class="home__navbar-link">Газеты</a>
            </li>
          </ul>
          <ul class="home__navbar">
            <div class="home__navbar-title">СПИСКИ РЕКОМЕНДАЦИЙ</div>
            <li class="home__navbar-item">
              <a href="#" class="home__navbar-link">Рекомендации</a>
            </li>
            <li class="home__navbar-item">
              <a href="#" class="home__navbar-link">Новинки</a>
            </li>
          </ul>

          <ul class="home__navbar">
            <div class="home__navbar-title">ПОИСК ПО ЖАНРУ</div>
            <li class="home__navbar-item">
              <a href="#" class="home__navbar-link">Бесплатно</a>
            </li>
            <li class="home__navbar-item">
              <a href="#" class="home__navbar-link">Детективы</a>
            </li>
            <li class="home__navbar-item">
              <a href="#" class="home__navbar-link">Приключения</a>
            </li>
          </ul>
        </nav>

        <div class="home__content">
          <div class="home__card page-one">
            {/* <img src="../assets/images/03.jpg" alt=""> */}
            <div class="home__card-title">
              название книги
            </div>
            <div class="home__card-author">
              имя автора
            </div>
            <div class="home__card-price">
              цена книги
            </div>
            <button class="home__card-btn">Купить</button>
            <button class="home__card-btn">Подарить</button>
          </div>
          <div class="home__card page-two">
            {/* <img src="../assets/images/01.jpg" alt=""> */}
            <div class="home__card-title">
              название книги
            </div>
            <div class="home__card-author">
              имя автора
            </div>
            <div class="home__card-price">
              цена книги
            </div>
            <button class="home__card-btn">Купить</button>
            <button class="home__card-btn">Подарить</button>
          </div>
          <div class="home__card page-tree">
            {/* <img src="../assets/images/02.jpg" alt=""> */}
            <div class="home__card-title">
              название книги
            </div>
            <div class="home__card-author">
              имя автора
            </div>
            <div class="home__card-price">
              цена книги
            </div>
            <button class="home__card-btn">Купить</button>
            <button class="home__card-btn">Подарить</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage