# KremlinBot.js
Бот, который создает фейковые заголовки, а так же комментарии.

## Подключение
В браузере:

```html
<script src="/yourpath/kremlinbot.js"></script>
```
## Как пользоваться?
### Создать класс Бот
```JavaScript
var kremlinbot1 = new Bot('Zver');
```
#### Создание новости
```JavaScript
kremlinbot1.news('good');
```
Параметры:
good – хорошую новость
bad – плохую новость

#### Создание комментария
```JavaScript
kremlinbot1.comment();
```
Параметры:
good – хорошую новость
bad – плохую новость
