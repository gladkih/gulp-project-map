# Gulp project map
[![NPM version](https://img.shields.io/badge/npm-1.0.4-brightgreen.svg)](https://www.npmjs.com/package/gulp-project-map)

> Generate a list of html files in a project

## Install
Install with [npm](https://npmjs.org/package/gulp-project-map)

```bash
$ npm install --save-dev gulp-project-map
```

## Example

```js
var gulp = require('gulp');
var projectMap = require('gulp-project-map');

gulp.task('projectMap', function () {
    map({
        path: './build'
      });
});
```

## Options
### path
The directory with files that must be considered

Type: `string`

Required: `false`

### extension
Extension files

Type: `string`

Required: `false`

### name
Name the file with a list of

Type: `string`

Required: `false`

### title
Title the file with a list of

Type: `string`

Required: `false`

## License
MIT ©[Maxim Gladkih](https://gladkih.su)
