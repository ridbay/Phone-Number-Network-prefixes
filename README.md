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
npm install phone_number_prefixes
```

Using `yarn`,

```bash
yarn add phone_number_prefixes
```

## Usage

```js
const { getNetworks, validatePhoneNumber } = require('phone_number_prefixes'); // JavaScript
import { getNetworks, validatePhoneNumber } from 'phone_number_prefixes'; // Typescript
```

```js
- Get All Networks name and phone number prefixes
const networks = getNetworks();
console.log(networks);
//[
//            {
//                "prefix": "0701",
//                "name": "AIRTEL",
//                "logo": ""
//            },
//            {
//                "prefix": "07020",
//                "name": "SMILE",
//                "logo": ""
//            },
//            {
//                "prefix": "07025",
//                "name": "MTN",
//                "logo": ""
//            }]

- Validate a Phone number
const number_data = validatePhoneNumber('08078197526');
console.log(number_data);
//  {
//            "network": "GLO",
//            "isValid": true
//        }
```

## Available Methods exposed by the Package

The following methods are available with this package

- getNetworks()
- validatePhoneNumber()

#### Want to contribute?

Contributions are welcome! Kindly refer to the [contribution guidelines](https://github.com/ridbay/Phone-Number-Network-prefixes/blob/main/CONTRIBUTING.md)
