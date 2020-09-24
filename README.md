# Wunderman Thompson TestFrontEnd

This project is a technical test for Job as Front End Developer in Wunderman Thompson.

Demo: https://jleon253.github.io/wt-test-frontend/

### Dev tools used:
> - HTML, CSS (SASS), SVG, normalize.css
> - ES6, Angular 9, TypeScript
> - **NPM Dependencies:** bootstrap-4-grid, SASS Compiler, AnimationCss

***  

### Extra functions:
> - Menu in Desktop view
> - Theory page (/theory)
> - Comments page (/comments)
> - 500 Page (/error)
> - 404 Page (/other-route)
> - Send mail in Contact Section
> - Scroll to top and Smooth Scroll
> - Data model for API Rest in TypeScript
> - Animations
> - Small GitFlow
> - Small Atomic Design

***  

### UI Kit:
Pages
> Home
> - .wt-home (for add this background with the plus icon)
> ~~~
> <main class="wt-home">
> ~~~

Components
> Navbar
> ~~~
> <app-navbar></app-navbar>
> ~~~

> Footer
> ~~~
> <app-footer></app-footer>
> ~~~

> Blurb
> ~~~
> <app-blurb [imgsrc][imgType][title][desc]></app-blurb>
> ~~~
> - imgsrc: image url
> - imgType: image type (svg or img)
> - title: title blurb
> - desc: description blurb

> Bloqtext
> ~~~
> <app-bloqtext [title][paragraph][align]></app-bloqtext>
> ~~~
> - title: title to show
> - paragraph: description block
> - align: align text (left, center, right)

> Blockplus
> ~~~
> <app-blockplus [color]></app-blockplus>
> ~~~
> - color: color plus symbols (orange or white)

> Backtotop
> ~~~
> <app-backtotop></app-backtotop>
> ~~~
> - To scroll up

> Button
> ~~~
> <button type="button" class="wt-btn wt-btn__primary">
> ~~~
> Variations:
> - wt-btn__primary: Orange style
> - wt-btn__light: Without color (link)
> - wt-btn__small: small size

***  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
