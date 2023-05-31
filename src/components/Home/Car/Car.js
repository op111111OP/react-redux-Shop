import React from "react";
import "./Car.css";
import Carousel from "react-bootstrap/Carousel";

function Car() {
  return (
    <div className="car">
      <Carousel>
        <Carousel.Item interval={600000} className="car_c">
          <div className="car_div car1">К Р А С У Н Я</div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={50000} className="car_c">
          <div className="car_div car1">Дівчина з красивим манікюром</div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={50000} className="car_c">
          <div className="car_div">
            Анна Александра Алиса Алена Ангелина Арина Анастасия Алина Аделина
            Анжела Белла Богдана Борислава Бритта Барбара Беатриса Брианна
            Бриджит Береника Бланка Валентина Валерия Варвара Василиса Вероника
            Виктория Виолетта Владислава Влада Вида
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={50000} className="car_c">
          <div className="car_div">
            Галина Гарриет Габриэлла Гвендолин Глория Грета Гертруда Гелла Гаяна
            Глориана Дарья Диана Доминика Дианна Дарина Диляра Джулия Джессика
            Дженнифер Дафна Екатерина Елена Елизавета Евгения Ева Елисей Емма
            Евдокия Ефросиния Есения
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={50000} className="car_c">
          <div className="car_div">
            Жанна Жасмин Жанетта Жюли Жозефина Жанет Жанель Жаклин Желена
            Жаннета Злата Зарина Зоя Земфира Зинаида Зарема Забава Зарема Зина
            Зара Ирина Инна Инесса Ида Илона Изабелла Изольда Иветта Изабель
            Инга
          </div>
          <Carousel.Caption> </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={50000} className="car_c">
          <div className="car_div">
            Йоанна Йоланта Йосифа Йемана Йелена Йеннифер Йелена Йокаста Йолина
            Йоселин Кира Карина Кристина Ксения Камилла Клара Кирилла Каролина
            Ксантия Клеопатра Любовь Лариса Лилия Лидия Людмила Лина Леся Линара
            Лиана Лолита Надежда Наталия Нина Нелли Ника Наталья Нино Надия
            Никалина Нонна
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={50000} className="car_c">
          <div className="car_div">
            Мария Марина Маргарита Милана Мирослава Милина Мира Марта Милия
            Марселина Олеся Олена Октябрина Оксанна Одетта Оливия Офелия Полина
            Полианна Поликсена Патриция Памела Поликарпия Пелагея Павла Петра
            Персефона Роза Регина Раиса Роксана Радмила Рената Рафаэлла Рут
            Римма Рада
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={50000} className="car_c">
          <div className="car_div">
            София Светлана Снежана Софья Сара Селена Сабрина Сандра Соня Симона
            Татьяна Тамара Теодора Тереза Тамар Таисия Талия Тамарин Тамрико
            Теона Ульяна Устинья Улита Устина Урания Фаина Федора Фелиция Флора
            Флоренсия Фелисити Филиппа Фиона Франческа Флоренция
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={50000} className="car_c">
          <div className="car_div">
            Ханна Халима Харита Хава Хадия Хазал Хасмина Хадижа Хатидже Халиса
            Цветана Целина Цецилия Цилинда Цирада Чара Чеслава Чиара Чулпан
            Челси Чариса Чижана Чинара Челена Чудеса Шарлотта Шакира Шанель
            Шария Шармин Шаира Шейла Шелли Шерил Ширин
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={50000} className="car_c">
          <div className="car_div">
            Эвелина Элина Эльза Эмилия Эмма Эрика Эсмира Эвгения Элеонора Эдита
            Юлия Юлиана Юлианна Юна Юстина Юдифь Юлияна Юлиянна Юнаида Юстиция
            Яна Ярослава Ядвига Ядвигарда Ядрина Ялла Ярина Ясмина Ясна Ядвига
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Car;
