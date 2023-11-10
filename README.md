# Phone Number Prefixes and Network

A package that returns the phone number prefixes and networks.

## Table of content

- [Installation](#installation)
- [Usage](#usage)
- [Available Methods exposed by the Package](#available-methods-exposed-by-the-package)
- [Want to Contribute](#want-to-contribute)

## Installation

This package can be installed with `npm` or `yarn`.

Using `npm`,

```
npm install quidax-package
```

Using `yarn`,

```bash
yarn add quidax-package
```

## Usage

```js
const Quidax = require('quidax-package'); // JavaScript
import Quidax from 'quidax-package'; // Typescript
```

Instantiate the Quidax class

```js
const quidax = new Quidax(PRIVATE_KEY);
```

- For more information about the services exposed by the Package, please refer to the [documentation](https://docs.quidax.com/reference/introduction-user-accounts).
- Be sure to keep your API Credentials securely in [environment variables](https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html).

## Available Methods exposed by the Package

The following methods are available with this package

#### Want to contribute?

Contributions are welcome! Kindly refer to the [contribution guidelines](https://github.com/ridbay/quidax-package/blob/main/CONTRIBUTING.md).
