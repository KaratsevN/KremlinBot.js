# KremlinBot.js
Бот, который создает фейковые заголовки, а так же комментарии.

## Подключение
В браузере:
```html
<script src="/yourpath/kremlinbot.js"></script>
```

## Как пользоваться?
Создать класс Бот
```JavaScript
var kremlinbot = new Bot('Vatnik');
```

#### Создание новости
```JavaScript
kremlinbot.news('good');
```
Параметры:
'good' – хорошую новость
'bad' – плохую новость

#### Создание комментария
```JavaScript
kremlinbot.comment();
```
Параметры:
good – хороший комментарий
bad – плохой комментарий
#
Пример: test.js