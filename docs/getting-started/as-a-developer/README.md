---
{
  "title": "As a Developer",
  "title_metadata": false,
  "layout": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "Getting Started/",
      "href": "/getting-started/"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell>

## Cedar + Vue
Cedar components are built using [Vue](https://vuejs.org) and can only be used in Vue projects
<hr>

## About component packages
All components are available as a package on [npm within the REI organization](https://www.npmjs.com/search?q=%40rei).

Each component is a separate NPM package. This ensures that you only have the essentials for your application - nothing more.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
npm install --save @rei/cdr-<component-name>
```
</cdr-doc-code-snippet>

Once installed, files are located in the package&lsquo;s `dist/` folder. Component packages often contain one JS file and one CSS file. 

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
node_modules/@rei/cdr-<component-name>/dist/cdr-<component-name>.js
node_modules/@rei/cdr-<component-name>/dist/cdr-<component-name>.css
```
</cdr-doc-code-snippet>

Some packages contain more (or fewer) than these two files which is noted in the package’s documentation.

<hr>

## Setup a project
All components depend upon core style and font assets. Without these assets included, components may be styled incorrectly.

First, install the assets package:

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
npm install --save @rei/cdr-assets
```
</cdr-doc-code-snippet>

The [cdr-assets package](https://www.npmjs.com/package/@rei/cdr-assets) contains these files:
  * cdr-core.css
  * cdr-fonts.css
  * cdr-tokens.scss

### Install required core styles
Cedar requires a core stylesheet to render components properly.

To include the stylesheet, import `cdr-core.css`:

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
import '@rei/cdr-assets/dist/cdr-core.css';
```
</cdr-doc-code-snippet>

## Install required fonts
Cedar uses specific fonts – Roboto, Roboto Condensed, and Sentinel – that are required for your project. 

Roboto and Roboto Condensed are available from [Google Fonts](https://fonts.google.com/specimen/Roboto).

Sentinel is available in the `cdr-assets` package and mapped using the `cdr-fonts.css` file.

To include these fonts, import `cdr-fonts.css`:

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
import '@rei/cdr-assets/dist/cdr-fonts.css';
```
</cdr-doc-code-snippet>

<hr>

## Install a component
Examples below demo the `CdrButton` component.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
npm install --save @rei/cdr-button
```
</cdr-doc-code-snippet>

### Including component-specific CSS
How you include css depends on your tech stack and varies from project to project. 

Here are a few common methods:

#### Webpack (css-loader)
If using a bundler, import css into javascript and let loaders extract it.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
import '@rei/cdr-button/dist/cdr-button.css';
```
</cdr-doc-code-snippet>

#### Postcss-import
Cedar packages include the [unofficial style field]() supported by postcss-import.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
import '@rei/cdr-button’;
```
</cdr-doc-code-snippet>

#### SCSS (or another pre-processor)
You can also import css from the node_modules folder.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
import 'path/to/node_modules/@rei/cdr-button/dist/cdr-button.css';
```
</cdr-doc-code-snippet>

Note: Code snippets provided throughout the docs will demonstrate the webpack + css-loader method.

<hr>

## Use a component
The examples in our documentation demonstrate usage in a [Single File Component](https://vuejs.org/v2/guide/single-file-components.html). If you aren’t using SFCs, read the vue docs for [registering components](https://vuejs.org/v2/guide/components-registration.html).

Examples below demonstrate the `CdrButton` component. Refer to each component’s documentation for a complete component API and advanced examples.

### Including component-specific CSS
1. Import the component within the `script` block.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
import { CdrButton } from '@rei/cdr-button';
```
</cdr-doc-code-snippet>

2. Register the component in the `components:` object.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
components: {
  CdrButton
}
```
</cdr-doc-code-snippet>

3. Add the component element, such as `<cdr-button>` into the template.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```html
<cdr-button>I'm a button</cdr-button>
```
</cdr-doc-code-snippet>

Final file:

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false" :max-height="false">
```html
<template>
    <cdr-button>I'm a button</cdr-button>
</template>

<script>
import { CdrButton } from '@rei/cdr-button';
export default {
  ...
  components: {
      CdrButton
  }
}
</script>
```
</cdr-doc-code-snippet>

### Configure component props
Most Cedar components provide properties to configure component data, display, and logic. For example, the `<cdr-button>` component provides a `size` property to configure the button’s size.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false" :max-height="false">
```html
<cdr-button size="large">I'm a large button</cdr-button>
```
</cdr-doc-code-snippet>

Refer to each component’s API documentation for a full list of available properties.

#### Bind dynamic data to the component
Props can be [static or dynamic](https://vuejs.org/v2/guide/components-props.html#Passing-Static-or-Dynamic-Props). To provide dynamic data (or non-string data) add a ‘:’ before the prop name.

Prop names are also documented and referenced in javascript as camel case, but [used in the template in kebab-case](https://vuejs.org/v2/guide/components-props.html#Prop-Casing-camelCase-vs-kebab-case).

In this example, the `responsiveSize` prop accepts an array of strings denoting size at different breakpoints. Note that `responsiveSize` is used as `responsive-size` in the template.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false" :max-height="false">
```html
<cdr-button :responsive-size="['small@xs', 'large@sm']">I'm a responsive button</cdr-button>
```
</cdr-doc-code-snippet>
<hr>

## Customize components using token variables
Cedar provides a robust collection of [design tokens](#) corresponding to Cedars foundations. Standard colors, typography mixins, space, size and other properties are available in the `cdr-assets` package as Sass/SCSS variables. If you need them in a different format such as LESS or XML, please [create an issue]() and let us know.

As you extend Cedar components and create your own components, work with your designer to take advantage of this inventory in your custom classes. Using them this way will ensure your custom styles remain consistent with design guidelines.

Here we’re using a typography mixin and a color token to style `.myClass`.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false" :max-height="false">
```html
<template>
  <p class="myClass">I'm styled with tokens!</p>
</template>

<script>
export default {
  ...
}
</script>

<style lang="scss">
@import 'path/to/node_modules/@rei/cdr-assets/dist/cdr-tokens.scss';

.myClass {
  @include redwood-display-10();
  color: $text-on-light;
}
</style>
```
</cdr-doc-code-snippet>

<hr/>

## Accessibility
Always follow the a11y guidelines outlined in each component’s documentation. (TODO: LINK TO BUTTON a11y when it exists)

<hr/>

## CSS Modules and custom class names
Component css class names are [css modules](https://github.com/css-modules/css-modules) that reflect the package version. For example, `CdrButton@0.2.0` will have classes that end in ‘_0-2-0’. This allows the possibility of components at different versions to live together without having css class name collisions. 

Never use Cedar class names within your own css or target them in javascript; they will change as you upgrade the package and break any functionality/styling you attach to them. 

To target CSS, create custom selectors such as `my-wrapper` and `my-selector` in the following example…

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false" :max-height="false">
```html
<template>
  <div class="my-wrapper">
    <cdr-button class="my-selector">I'm a button</cdr-button>
  </div>
</template>

...

<style>
.my-wrapper > .my-selector {
 /* override button styles here */
}
</style>
```
</cdr-doc-code-snippet>

Some components are more complex and have templates with multiple areas you may wish to add your own selectors. We try to be mindful of this and add props that will allow you to target your own classes to various elements. 

For example with checkbox you may want to target both the label and the content areas. 

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false" :max-height="false">
```html
<template>
  <cdr-checkbox label-class="my-label" content-class="my-content">My checkbox</cdr-checkbox>
</template>

...

<style>
.my-label {

}

.my-content {

}
</style>
```
</cdr-doc-code-snippet>

If you find that a component needs to have a targeted prop class added, please [create an issue](#) and let us know.

</cdr-doc-table-of-contents-shell>
