<p align="center">
  <a href="https://github.com/ng-matero">
    <img width="150" src="https://avatars1.githubusercontent.com/u/49753463?s=200&v=4">
  </a>
</p>

<h1 align="center">
NG-MATERO
</h1>

<div align="center">

Ng-Matero is an Angular admin templete made with Material components.

[![npm](https://img.shields.io/npm/v/ng-matero.svg?style=flat-square)](https://www.npmjs.com/package/ng-matero)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/ng-matero/ng-matero/blob/master/LICENSE)
[![Gitter](https://img.shields.io/gitter/room/ng-matero/ng-matero.svg?style=flat-square)](https://gitter.im/matero-io/ng-matero)
[![docs](https://img.shields.io/badge/docs-gitbook-blue?style=flat-square)](https://ng-matero.github.io/docs/zh/)

</div>

## â¨ Features

- Schematics support
- Modern design style
- Various layout
- Powerful color system
- Rich helpers
- Common Page Templates
- RTL support

## đ Documents

[English](https://ng-matero.github.io/docs/en/) | [įŽäŊä¸­æ](https://ng-matero.github.io/docs/zh/)

## đ§ Installation

The project has support `ng add` yet. 

```bash
$ ng new <project-name>
$ cd <project-name>
$ ng add ng-matero
```

You can also git clone the starter repo to start. But it's not recommended.

```bash
$ git clone --depth=1 git@github.com:ng-matero/starter.git <project-name>
$ cd <project-name>
$ npm install
```

## âī¸ Schematics

You can use the ng-matero schematics to generate a module or a page.

### Module schematic

Generate a lazy loaded module.

```bash
$ ng g ng-matero:module <module-name>
```

The new module will be created in `routes` file, it will be added in `routes.module` and its route declaration will be added in `routes-routing.module` automaticly.

### Page schematic

Generate a page component in the module.

```bash
$ ng g ng-matero:page <page-name> -m=<module-name>
```

Generate a entry component in the page component.

```bash
$ ng g ng-matero:page <page-name>/<entry-component-name> -m=<module-name> -e=true
```

### Example

Just two steps after initializing the project, you can get a route page.

```bash
$ ng g ng-matero:module abc
$ ng g ng-matero:page def -m=abc
```
Take a look at `http://localhost:4200/#/abc/def`, enjoy it!

## đģ Development

```bash
$ git clone git@github.com:ng-matero/ng-matero.git
$ cd ng-matero
$ npm install
$ npm run hmr
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## đē Road Map

- [X] Schematics Support
  - [X] `ng add`
  - [X] `ng generate`
  - [X] `ng update` (incomplete)
- [ ] Internationalization (i18n)
- [ ] Material Extentions
- [ ] VS Code Snippet

## đ License

MIT
