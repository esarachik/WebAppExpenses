Writing the App
In contrast to our usual steps, let’s go ahead and set up the skeleton app files before we do anything else.

In your project directory, create a new directory called src. (The final file structure will look something like this:)

./my-project
├── package.json // Generate this with `npm init`
├── index.html
├── .babelrc // Babel is needed.
└── src
    ├── App.vue
    └── main.js
Start off with your typical basic index.html.

index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>My Vue.js App</title>
  </head>
  <body>
    <div id="app"></div>
    <!-- Note the reference to src here. Parcel will rewrite it on build. -->
    <script src="./src/main.js"></script>
  </body>
</html>
Then add the Vue bootstrap code.

src/main.js
import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
});
And now the App component.

src/App.vue
<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!'
    }
  }
}
</script>

<style lang="css">
  #app {
    color: #56b983;
  }
</style>

Throw in .babelrc as well too, just for good measure.

.babelrc
{
  "presets": [
    "env"
  ]
}
Adding Parcel
Setting up Parcel is as simple as installing a few dependencies.

First, let’s install everything we need for the Vue app itself.

# Yarn
$ yarn add vue

# NPM
$ npm install vue --save
Then parcel, a plugin for Vue, and babel-preset-env…

# Yarn
$ yarn add parcel-bundler parcel-plugin-vue @vue/component-compiler-utils babel-preset-env -D

# NPM
$ npm install parcel-bundler parcel-plugin-vue @vue/component-compiler-utils babel-preset-env --save-dev
Now… well, that’s it actually.

ERROR -> used "npm install parcel @parcel/transformer-vue babel-preset-env --save-dev"

Running Parcel
You should now be able to run your app in development mode with hot reloading by running npx parcel in your project directory. To build for production with minification and dead code elimination, just use npx parcel build.

(If you’re wondering what npx is, take a look here. It should just work as long as you have NPM 5.2.0 or newer installed.)

But what if I want eslint?
I’m glad you asked. In that case, go ahead and install eslint, eslint-plugin-vue, and parcel-plugin-eslint.

# Yarn
$ yarn add eslint eslint-plugin-vue parcel-plugin-eslint -D

# NPM
$ npm install eslint eslint-plugin-vue parcel-plugin-eslint --save-dev
(Don’t forget to create your .eslintrc.js)

.eslintrc.js
// https://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/essential'
  ]
}
What about LESS / SASS / PostCSS?
They’re supported by Parcel out-of-the box! Even in Vue components! For more information about built-in asset types, take a look at the official Parcel documentation.

Want More Information?
Take a look at our more in-depth Parcel guide. Oh, and, as always, read the official documentation! Parcel’s is nice and short.

Thanks for learning with the DigitalOcean Community. Check out our offerings for compute, storage, networking, and managed databases.

Learn more about us