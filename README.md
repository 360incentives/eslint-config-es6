# ECMAScript 6 linting

This is a baseline configuration for linting ES6 files using [ESLint](http://eslint.org/docs/rules/#ecmascript-6).

#### Usage

```sh
npm i 360incentives/eslint-config-es6 -D
```

and in your root `.eslintrc` file add `es6` to your list of extends (recommended that this is used in conjunction with the [eslint-config-base](https://github.com/360incentives/eslint-config-base) baseline config file)

json style:
```json
{
    "extends": ["base", "es6"]
}
```

yaml style:
```yaml
---
extends:
- base
- es6
```
