# Задание 6
## ТЕОРИЯ

 
:one: Разбираемся с примером данного семинара

:two:  Изучаем дополнительные ссылки к лекцииям данного [семинара](https://github.com/LisKorzun/learning-js__from-scratch-to-expert/blob/master/seminar_06/README.md).

## ПРАКТИКУМ:

:one: Переписываем календарь, основная цель - сохранение пользовательских мероприятий в localStorage.

Этапы создания приложения:

NOTE: предпочтительнее создавать приложение используя возможности Gulp
1. Сверстать в html пример красивого календаря на месяц, используя один из css-framework (Bootstrap, bulma ...)
1. Создать в JS конструктор, который бы мог создать объект календаря:
    ```javascript
    var calendar = new Calendar(); // календарь на текущий месяц
    //или
    var calendar = new Calendar(5, 2016); // календарь на май 2016 года
    
    //один конструктор должен поддерживать оба варианта создания объектов
    ```
1. Написать метод `calendar.render()`, при вызове которого в определенном контейнере должен отобразиться календарь, на тот месяц и год, которые в данный момент хранит в себе ваш объект `calendar`. При создании основывайтесь на верстку вашего календаря. Разбивайте на маленькие и понятные функции. После создания метода `render`, удалить из html верстку, а при загрузке страницы создать один экземпляр календаря и отрендерить его.
1. Написать методы `next()` и `prev()`, которые бы изменяли текущее состояние вашего объектв `calendar`, увеличивая либо уменьшая месяц (когда нужно и год).
1. Повесить `click EventListener` на ваш календарь. При клике по стрелочкам вправо/влево, которые могут находиться в шапке календаря, должен вызываться метод `this.next().render()` или `this.prev().render()`