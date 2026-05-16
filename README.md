# Стартовый шаблон для Frontend разработки

Лёгкий стартовый шаблон для фронтенд-разработки без тяжёлых фреймворков.
Подходит для обучения, небольших проектов и понимания базовой архитектуры Frontend.

## О проекте

Этот шаблон позволяет:
- писать на JSX без React
- использовать компонентный подход
- работать с современным стеком без перегрузки

Отлично подходит для:
- обучения JavaScript
- небольших сайтов
- лендингов и UI-прототипов

## Ограничения

Не подходит для:
- сложных SPA
- приложений с тяжёлой логикой на клиенте

## Из чего состоит шаблон

1. [**Minista**](#minista) (v4.0.1)
    - Это генератор статических сайтов (SSG). 
    - Позволяет использовать JSX, но без использования библиотек, таких как **React**. 
    - Под капотом использует сборщик **Vite**
    - [Ссылка на документацию](https://minista.qranoko.jp/)

2. [**Препроцессор Sass**](#sass) (v1.99.0)
    - [Ссылка на документацию](https://sass-lang.com/)

3. [**SVG Optimizer**](#svgo) (v4.0.1)
    - Это инструмент для оптимизации SVG-файлов
    - Удаляет у SVG иконок лишние атрибуты, комментарии, длинные пути
    - Помогает корректно управлять стилями (например через `currentColor`)
    - [Ссылка на документацию](https://www.npmjs.com/package/svgo)

4. **clsx** (v2.1.1)
    - Это библиотека, которая помогает удобно и автоматически собирать **CSS** классы в **className**
    - [Ссылка на документацию](https://www.npmjs.com/package/clsx)

5. [**StyleLint**](#stylelint) (v17.11.0)
    - Поддерживает единый стиль кода
    - Помогает избегать ошибок
    - Помогает соблюдать архитектуру CSS
    - Помогает делать код предсказуемым и читаемым для команды
    - [Ссылка на документацию](https://stylelint.io/)

6. [**ESLint**](#eslint) (v9.30.1)
    - Помогает находить ошибки
    - Поддерживает единый стиль кода
    - Избегает потенциальных багов
    - Делает код более понятным и аккуратным
    - [Ссылка на документацию](https://eslint.org/)

## Minista
- `npm run dev` — Запустит локальный сервер в режиме разработки
- `npm run build` — Создаст папку **dist** с подготовленными файлами для хостинга
- `npm run preview` — Запустит локальный сервер для проверки сбилденных файлов

## Sass
`src/styles/index.js` — Главный файл со стилями, который потом подключается в разметку в файл **global.jsx**.  
Он подключает все Sass-файлы проекта.

Папка **src/styles/helpers** автоматически подключается во все Sass-файлы. Вручную подключать её не нужно.

## Подключение SVG иконок в проект
Иконки подключаются как отдельные SVG-файлы через компонент `Icon`.  
Каждая иконка хранится в папке:
```bash
/src/assets/icons
```

Компонент `Icon`:
- Принимает имя иконки (`name="example"`)
- Находит файл через маппинг `ICONS`, который хранится в: `src/components/Icon/icons.js`
- Вставляет SVG через компонент `Sprite`

> [!IMPORTANT] 
> После добавления иконки её нужно очистить от ненужных атрибутов, которые будут мешать стилизовать иконку.  
> Для этого используется команда — `npm run svg:clean`  
> После этого SVG будет очищен от лишних атрибутов, а `fill` заменён на `currentColor`, что позволит управлять цветом через CSS.

Подключение иконки в проект:
```jsx
<Icon name="donuts" size={140} color="red" />
```
### Типы SVG иконок

В системе иконки могут отображаться в двух режимах:
- fill — заливка
- stroke — контур

По умолчанию тип иконки задаётся в файле src/components/icons.js:
```jsx
export const ICONS = {
  cloud: { id: "cloud", variant: "stroke" }
}
```

### Переопределение типа

В некоторых случаях одну и ту же иконку нужно использовать в разных стилях.

Для этого можно переопределить тип через проп variant:
```jsx
<Icon name="cloud" variant="fill" />
```

### Поведение по умолчанию

Если variant не указан в icons.js, иконка считается stroke:

## Stylelint

### Запуск Линтера

**Проверка файлов**
```bash
npx stylelint "src/**/*.{css,scss}"
```

**Автоисправление**
```bash
npx stylelint "src/**/*.{css,scss}" --fix
```

### Основные правила проекта

### Подключение файлов с помощью директивы **@import** запрещено.

- Устаревший подход
- Используйте **@use** и **@forward**

**Правило в конфиге**
```js
'at-rule-disallowed-list': ['import']
```

### Имена CSS классов

**Для CSS классов Запрещено использовать camelCase нотацию.**

Например:
```scss
.BigButton {}
.cardTitle {}
```

**Правило в конфиге**
```js
'selector-class-pattern': '^[a-z0-9\\-_]+$'
```

### CSS и SCSS переменные

**SCSS** и **CSS** переменные должны использовать **lowercase** и **kebab-case naming**

```scss
--main-color: #ffffff;
$main-color: #ffffff;
```

**Правило для CSS переменных в конфиге**
```js
'custom-property-pattern': '^[a-z][a-z0-9-]*$'
```

> [!IMPORTANT]
> CSS переменные должны располагаться перед обычными CSS свойствами внутри блока.
> В противном случае будет ошибка

**Правило для SCSS переменных в конфиге**
```js
'scss/dollar-variable-pattern': '^[a-z][a-z0-9-]*$',
```

### Цвета

**HEX** использовать в полном формате — `color: #ffffff;`

`color: #fff;` — Вызовет ошибку

**Правило в конфиге**  
```js
'color-hex-length': 'long'
```  
Именованные цвета запрещены. Например, `color: red`.

**Правило в конфиге**
```js
'color-named': 'never',
```

### Шрифты

Название шрифта нужно помещать в двойные кавычки

**Правило в конфиге**
```js
'font-family-name-quotes': 'always-unless-keyword'
```

### Указывание нуля в свойствах

Для значения `0` единицы измерения не указываются. Кроме CSS и SCSS переменных

```scss
.example {
  margin: 0; // Единицу измерения указывать не нужно
}
```

### Использование **!important** запрещено

Если без **!important** не обойтись, это правило можно отключить с помощью комментария:

**Отключение правила для одной строки:**

```scss
.element {
  /* stylelint-disable-next-line declaration-no-important */
  color: red !important;
}
```

**Отключение правила для целого блока кода:**

```scss
/* stylelint-disable declaration-no-important */

.utility-class-1 { display: none !important; }
.utility-class-2 { margin: 0 !important; }

/* stylelint-enable declaration-no-important */
```

### Порядок свойств

Свойства должны идти в определённом порядке.

**Свойства сгруппированы логически:**
1. Positioning
2. Layout
3. Box model
4. Typography
5. Visual
6. Effects
7. Misc

**Пример:**

```scss
.card {
  // CSS variables
  --card-padding: 20px;
  
  // Positioning
  position: relative;
  z-index: 1;

  // Layout
  display: flex;
  justify-content: center;
  align-items: center;

  // Box model
  width: 100%;
  padding: 20px;

  // Typography
  font-size: 16px;
  color: #ffffff;

  // Visual
  background-color: #000000;
  border-radius: 12px;

  // Effects
  transition: transform 0.3s ease;
}
```

## ESLint

**ESLint** — это инструмент для анализа JavaScript-кода.

В данном шаблоне ESLint проверяет:
  - JavaScript
  - JSX
  - React-компоненты
  - Accessibility (доступность интерфейсов)
  - Потенциально опасный код
  - Единый стиль написания

### Запуск ESLint

**Проверка проекта:**
```bash
npm run lint
```

**Автоматическое исправление:**
```bash
npm run lint:fix
```

### Используемые плагины

#### REACT

Плагин добавляет правила для React и JSX.

**Подключение плагина в файле конфига**
```js
import reactPlugin from 'eslint-plugin-react'
```

[Документация плагина](https://github.com/jsx-eslint/eslint-plugin-react?utm_source=chatgpt.com)

#### JSX Accessibility

Плагин проверяет доступность интерфейсов.

**Например:**
- наличие alt у изображений
- доступность элементов с клавиатуры
- корректность медиа-элементов

**Подключение плагина в файле конфига**
```js
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
```

[Документация плагина](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y?utm_source=chatgpt.com)

### Настройки JavaScript и JSX

#### Babel Parser

**Фрагмент настройки:**
```js
parser: babelParser
```

**Babel Parser** помогает **ESLint** корректно анализировать современный **JavaScript** и **JSX-синтаксис**.

#### JSX

Включает поддержку JSX.

**Фрагмент настройки:**
```js
ecmaFeatures: {
  jsx: true,
}
```

#### ECMAScript

Разрешает использовать современный JavaScript.

**Фрагмент настройки:**
```js
ecmaVersion: 'latest'
```

### Основные правила проекта

#### No-console

Предупреждает об использовании `console.log()`, потому что `console.log()` часто забывают удалить перед production.

**Фрагмент настройки:**

```js
'no-console': ['warn', { allow: ['warn', 'error'] }]
```

Разрешает использовать `console.warn()` и `console.error()`

#### Eqeqeq

Предупреждает про использование нестрогого сравнения. Строгое сравнение безопаснее и не приводит типы автоматически.

**Фрагмент настройки:**

```js
'eqeqeq': 'warn'
```

#### Curly

Требует фигурные скобки даже у однострочных ветвлений.

**Фрагмент настройки:**

```js
'curly': 'warn'
```

#### No-else-return

Убирает лишний else.

**Фрагмент настройки:**

```js
'no-else-return': 'warn'
```

#### Prefer-const

Предлагает использовать const, если переменная не изменяется.

**Фрагмент настройки:**

```js
'prefer-const': 'warn'
```

#### comma-dangle

Требует конечную запятую (**trailing comma**) в многострочных конструкциях.

**Например:**

```js
const user = {
  name: 'Alex',
  age: 25,
}
```

**Фрагмент настройки:**

```js
'comma-dangle': [
  'error',
  {
    arrays: 'always-multiline',
    objects: 'always-multiline',
    imports: 'always-multiline',
    exports: 'always-multiline',
    functions: 'never',
  },
],
```

### Правила React

#### React/jsx-uses-vars

Помогает **ESLint** понимать **JSX-компоненты** как используемые переменные.

Без этого **ESLint** может ошибочно считать компонент неиспользуемым.

**Фрагмент настройки:**

```js
'react/jsx-uses-vars': 'error'
```

#### React/jsx-uses-react

Отключено, потому что в современных версиях React импорт React для JSX больше не нужен.

**Фрагмент настройки:**

```js
'react/jsx-uses-vars': 'error'
```

### Accessibility (A11Y)

#### Jsx-a11y/media-has-caption

Проверяет наличие субтитров у видео и аудио.

**Фрагмент настройки:**

```js
'jsx-a11y/media-has-caption': 'warn'
```

#### Jsx-a11y/no-noninteractive-tabindex

Предупреждает, если **tabIndex** используется на неинтерактивных элементах.

**Фрагмент настройки:**

```js
'jsx-a11y/no-noninteractive-tabindex': 'warn'
```

### Как временно отключить правило

> [!TIP]
> Иногда нужно отключить некоторое правило во время разработки.
> К примеру, для использования `console.log` и чтобы ошибки не отвлекали взгляд их можно на нужное время отключить

**Для одной строки:**
```js
// eslint-disable-next-line no-console
console.log('debug')
```

**Для блока кода:**
```js
/* eslint-disable no-console */

console.log('debug')

/* eslint-enable no-console */
```

[Список всех настроек ESLint](https://eslint.org/docs/latest/rules/?utm_source=chatgpt.com)
