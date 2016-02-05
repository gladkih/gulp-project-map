# Gulp project map
[![NPM version](https://img.shields.io/badge/npm-1.1.0-brightgreen.svg)](https://www.npmjs.com/package/gulp-project-map)
[![devDependency Status](https://david-dm.org/gladkih/gulp-project-map/dev-status.svg)](https://david-dm.org/gladkih/gulp-project-map#info=devDependencies)


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

### Options
Type: `Object | Null`<br/>Default:

```js
{
  path: './',
  extension: '.html',
  name: 'result',
  title: 'project-map'
}
```

- `path` (String) Directory that needs file list created
- `extension` (String) File extension<br/>
- `name` (String) Name of file where list is created<br/>
- `title` (String) File header<br/>

## License
MIT ©[Maxim Gladkih](https://gladkih.su)
