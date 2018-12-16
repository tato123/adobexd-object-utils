[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Adobe XD CC Object Utils

The goal of `adobexd-object-utils` is to provide a base set of helper tools, similar to lodash

## Installation

If using yarn:

```
yarn add adobexd-object-utils
```

If using npm

```
npm install adobexd-object-utils
```

## Usage

Sample printing out a JSON representation (automatically deep mapped)

```
const { serialize } = require('./adobexd-serializer')

async function serializeObject(selection) {
  const json = serialize(selection.items)
  console.log(JSON.stringify(json))
}

module.exports = {
  commands: {
    serializeObject: serializeObject
  }
}
```

## Credit

This project was originally started as a fork of [xd-json-wrapper](https://github.com/svschannak/xd-json-wrapper). However, the goals of this project and particular use cases were unique enough that it no longer seemed a long lived fork was an appropriate mechanism.

# MIT License

Copyright (c) 2018 Jonathan Fontanez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
