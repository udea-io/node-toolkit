# udea-io Eslint Config

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

> ESLint [shareable config](https://github.com/udea-io/node-toolkit/tree/master/packages/eslint-config)

[@udea-io/eslint-config](https://github.com/udea-io/eslint-config) is a shareable configuration package
for [eslint](http://eslint.org) built on top of [eslint-airbnb-config](https://github.com/airbnb/javascript) and
modified to meet udea-io's own standards.

## Installation

1. Install all peer dependencies

```sh
npx install-peerdeps --dev @udea-io/eslint-config
```

2. Install [@udea-io/eslint-config](https://github.com/udea-io/node-toolkit/tree/master/packages/eslint-config) as a
   development dependency of your project:

```sh
npm install @udea-io/eslint-config --save-dev
```

## Available Configs

### @udea-io/eslint-config

The default export contains common rules that are not specific to any framework or environment.

```js
// eslintrc.js
module.exports = {
    extends: ['@udea-io/eslint-config'],
};
```

### @udea-io/eslint-config/react

Extends `@udea-io/eslint-config` adding specific rules to React.

```sh
npm install --save-dev eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-import-resolver-babel-plugin-root-import
```

```js
// eslintrc.js
module.exports = {
    extends: ['@udea-io/eslint-config/react'],
};
```

### @udea-io/eslint-config/react-native

Extends `@udea-io/eslint-config` adding specific rules to React Native.

```sh
npm install --save-dev eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @react-native-community/eslint-config @react-native-community/eslint-plugin eslint-plugin-react-native babel-plugin-root-import eslint-import-resolver-babel-plugin-root-import  
```

```js
// eslintrc.js
module.exports = {
    extends: ['@udea-io/eslint-config/react-native'],
};
```

### @udea-io/eslint-config/node

Extends `@udea-io/eslint-config` adding specific rules to Node.js.

```js
// eslintrc.js
module.exports = {
    extends: ['@udea-io/eslint-config/node'],
};
```

### @udea-io/eslint-config/mocha

Adds specific rules for the `mocha` testing framework.

This rule requires installing `eslint-plugin-mocha`

```sh
npm install --save-dev eslint-plugin-mocha
```

```js
// eslintrc.js
module.exports = {
    extends: ['@udea-io/eslint-config/node', '@udea-io/eslint-config/mocha'],
};
```

## Usage

In order to use this config, choose the one you want and add this configuration to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@udea-io/eslint-config"
  }
}
```

Or add a `.eslintrc.js` file to your project root containing:

```js
module.exports = {
    extends: ['@udea-io/eslint-config'],
};
```

## VSCode integration

We recommend turning on VSCode settings to automatically run `eslint --fix` on save.

```json
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true,
}
```

This will automagically format your code once you save. You don't need VSCode prettier extension enabled or running on
save as eslint will automatically run `prettier` for you.
