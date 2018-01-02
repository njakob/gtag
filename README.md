<h1 align="center">
  gtag
</h1>

<p align="center">
  Simple Google Analytics wrapper for Redux
</p>

<p align="center">
  <a href="https://travis-ci.org/njakob/gtag"><img alt="Build Status" src="https://travis-ci.org/njakob/gtag.svg?branch=master"></a>
  <a href="https://nodei.co/npm/@njakob/gtag"><img alt="NPM version" src="https://img.shields.io/npm/v/@njakob/gtag.svg"></a>
  <a href="https://conventionalcommits.org"><img alt="Conventional Commits" src="https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg"></a>
</p>

## Installation

```
$ npm install @njakob/gtag
```

```
$ yarn add @njakob/gtag
```

## Usage

### Redux

```js
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import * as gtag from '@njakob/gtag';

const yourEnhancers = compose(
  applyMiddleware(
    gtag.middleware({ gaTrackingID: 'YOUR_TRACKING_ID' }),
    // Other middlewares
  ),
);

const store = createStore(yourReducer, yourEnhancers);
```

```js
store.dispatch(gtag.trackPageViewAction('/'))
```

### Server side

```js
import { getSnippet } from '@njakob/gtag';

export default () => `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
  </head>
  <body>
    <div id="react-root"></div>
    ${gtag.getSnippet()}
  </body>
</html>`;
```

## Changelog

See [changelog](CHANGELOG).

## License

[MIT License](LICENSE)
