# Gulp project map
[![NPM version](https://img.shields.io/badge/npm-1.0.4-brightgreen.svg)](https://www.npmjs.com/package/gulp-project-map)

> Generate list of file for the project (html sitemap)

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
    projectMap({
        path: './build'
      });
});
```

## Options
### path
Directory that needs file list created

Type: `string`

Required: `false`

### extension
File extension

Type: `string`

Required: `false`

### name
Name of file where list is created

Type: `string`

Required: `false`

### title
File header

Type: `string`

Required: `false`

## License
MIT ©[Maxim Gladkih](https://gladkih.su)
