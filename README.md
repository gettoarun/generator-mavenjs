# generator-mavenjs [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A maven style nodejs project maker. Supports gulp and docker too.

I have developed this in JS, not in coffee, because, the generator defaulted some code and I needed something quick. I intend to coffee-ize this code sometime in the future.

Warning: The generator does not default the libraries to a known combination of the dependent tools. Maintaining that kinda config would make this tool less useful, I feel. Each developer would have a preference on the wiring this tool for now just defaults to latest.

## Gotchas

* For 0.11.x projects I had to use [gulp-coffee-es6](https://github.com/t3chnoboy/gulp-coffee-es6.git)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-mavenjs using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-mavenjs
```

Then generate your new project:

```bash
yo mavenjs
```

## Roadmap

* Coffee-ize
* Support Grunt based pipeline
* Expand docker support
* Add Jasmine test support


## License

ISC © [Arun N. Kumar](www.gettoarun.com)


[npm-image]: https://badge.fury.io/js/generator-mavenjs.svg
[npm-url]: https://npmjs.org/package/generator-mavenjs
[travis-image]: https://travis-ci.org/gettoarun/generator-mavenjs.svg?branch=master
[travis-url]: https://travis-ci.org/gettoarun/generator-mavenjs
[daviddm-image]: https://david-dm.org/gettoarun/generator-mavenjs.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/gettoarun/generator-mavenjs
[coveralls-image]: https://coveralls.io/repos/gettoarun/generator-mavenjs/badge.svg
[coveralls-url]: https://coveralls.io/r/gettoarun/generator-mavenjs
