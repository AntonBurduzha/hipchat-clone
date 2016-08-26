## Project init
1. npm install
2. npm run build

### Gulp Tasks
1. gulp build - building project
2. gulp sass - compiling sass to css
3. gulp index - copying index.html to dist folder

### Test check-list
1. Соответствие макету - correct
2. Кроссбраузерность (last 2 versions IE, Opera, Google Chrome), кодировка (utf-8) - correct
3. CSSLint - correct
4. Сайт должен нормально смотреться во всех стандартных разрешениях:
    a. Screen <= 768px - correct
    b. Screen < 992px - correct
    c. Screen < 1024+px - correct
5. Корректная работа, использование семантики html5 - correct
6. Использование препроцессоров, постпроцессоров и систем сборки (Sass, Gulp, Autoprefixer) - correct
7. Оптимизация скорости загрузки - correct
8. Правильная структура заголовков (H1,H2,… и т.д. и TITLE) - correct
9. Исправить ошибки:
    a. Минимизировать файл gulpfile.js - correct
    b. Исправить в package.json раздел devDependencies - correct
    c. Использовать корректные имена файлов .scss - correct
    d. Для всех шрифтов создать переменные в файле variables.scss - correct
    e. Исправить ошибку связанную с семантическим построение файла index.html - correct
    f. Исправить ошибку связанную с media queries - correct