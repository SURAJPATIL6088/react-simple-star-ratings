# React Simple Rating Package

> A simple npm package for Different Types of Rating to your project.

[![NPM](https://img.shields.io/npm/v/react-simple-stars-rating.svg)](https://www.npmjs.com/package/react-simple-stars-rating) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![GitHub](https://img.shields.io/github/license/SURAJPATIL6088/react-simple-stars-rating)

<hr/>

## Install
- <b>npm</b>
```npm
npm i react-simple-stars-rating
```

<hr/>

- Import the package in your app:
```js
import {StarRating} from 'react-simple-stars-rating';
```

- Get the Component from the package
```js
<StarRating />
```
<hr/>

## Usage

```
import React from 'react'
import {StarRating} from 'react-simple-stars-rating';
import './App.css'

function App() {

  return (
    <>
      <h1>Star Rating in React</h1>
      <StarRating/>
    </>
  )
}

export default App;
```

<hr/>

## Available Props

| Prop                 | Type             | Options  | Description                                               |          Default           |
| -------------------- | ---------------- | -------- | --------------------------------------------------------- | :------------------------: |
| `onClick`            | function         | Optional | callback with `hover`, `index` and `event` values passed  |            `-`             |
| `onMouseOver`        | function         | Optional | callback with `event` passed                              |            `-`             |
| `onMouseLeave`       | function         | Optional | callback with `event` passed                              |            `-`             |
| `initialValue`       | number           | Optional | Set initial value                                         |            `0`             |
| `iconsCount`         | number           | Optional | Number of the icons                                       |            `5`             |
| `transition`         | boolean          | Optional | Adds a smooth transition effect on mouse hover            |          `false`           |
| `className`          | string           | Optional | Applied to the `main` span                                | `react-simple-star-rating` |
| `style`              | CSSProperties    | Optional | Inline style applied to the `main` span                   |       `basic style`        |
| `emptyStyle`         | CSSProperties    | Optional | Inline style applied to `empty` icon span                 |       `basic style`        |
| `emptyClassName`     | string           | Optional | Applied to the `empty` icon span                          |       `empty-icons`        |
| `customIcons`        | array of object  | Optional | Add a group of icons                                      |            `[]`            |
| `allowHover`         | boolean          | Optional | Enable / Disable hover effect                             |           `true`           |
| `disableFillHover`   | boolean          | Optional | Enable / Disable hover effect on filled stars             |          `false`           |
| `allowTitleTag`      | boolean          | Optional | Enable / Disable HTML`title` Tag                          |           `true`           |
| `showTooltip`        | boolean          | Optional | Show a tooltip with live values                           |          `false`           |
| `tooltipDefaultText` | string           | Optional | Initial tooltip text if no rating value                   |        `Your Rate`         |
| `tooltipArray`       | array            | Optional | Array of strings to show inside tooltip                   |            `[]`            |
| `tooltipClassName`   | string           | Optional | Tooltip CSS class                                         |      `rating-tooltip`      |
---


### License
Apache License 2.0 © [SURAJPATIL6088](https://github.com/SURAJPATIL6088/)
