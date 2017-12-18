# vue-webpack-boilerplate

> A full-featured Webpack setup with hot-reload, lint-on-save, unit testing & css extraction.

> This template is Vue 2.0 compatible. For Vue 1.x use this command: `vue init webpack#1.0 my-project`

## Update custom-style for yourself

基于vue-cli下的webpack模板的前提下,额外支持下面内容

- 支持scss
- mixin.scss的自动注入,无需每个文件@import '../../xxx/mixin.scss'这种引入(使用sass-resource-loader)
- 自动注入api请求到每个文件,无需 import { postData } from '../.../api'(使用webpack.providePlugin)再结合eslintrc的global设置,自动引入全局变量,消除警告
- 生产环境构建优化.加入了inlineSourcePluigin,自动将移动端较少的文件资源直接内联在html中.
- 一些配置的集中化处理.但因为没有结合(结合接口的话,就可以实现无需每次打包,就动态切换一些特殊资源的域名问题,比如是不是切换域名等,就无需重新构建 npm run build)
- 加入stylelint.使用stylelint处理vue文件.按照一个固定的格式书写css属性.(stylelint, stylelint-config-order, styleling-config-standard)
- 内置axios, mint-ui,支持mint-ui的按需引入

## Documentation

- [For this template](http://vuejs-templates.github.io/webpack): common questions specific to this template are answered and each part is described in greater detail
- [For Vue 2.0](http://vuejs.org/guide/): general information about how to work with Vue, not specific to this template

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init webpack my-project
$ cd my-project
$ npm install
$ npm run dev
```

This will scaffold the project using the `master` branch. If you wish to use the latest version of the webpack template, do the following instead:

``` bash
$ vue init webpack#develop my-project
```

:warning: **The develop branch is not considered stable and can contain bugs or not build at all, so use at your own risk.**

The development server will run on port 8080 by default. If that port is already in use on your machine, the next free port will be used.

## What's Included

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - Static assets compiled with version hashes for efficient long-term caching, and an auto-generated production `index.html` with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

- `npm run unit`: Unit tests run in [JSDOM](https://github.com/tmpvar/jsdom) with [Jest](https://facebook.github.io/jest/), or in PhantomJS with Karma + Mocha + karma-webpack.
  - Supports ES2015+ in test files.
  - Easy mocking.

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```
