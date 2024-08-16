# storage-cache

storage-cache is a utility library designed to enhance the native `localStorage` and `sessionStorage` in browsers. With this library, you can manage stored data more flexibly, avoid interference between different data, and easily set expiration times for your data.


## Features

- **Storage scope isolation**
- **Support for setting expiration times**

## Installation

```shell
npm install @cc-heart/storage-cache
```


## Usage

Create a storage-cache instance

```js
import { defineStorage } from '@cc-heart/storage-cache';

const { localStorageCache, sessionStorageCache } = defineStorage('namespace');
```

Set data

```js
localStorageCache.setItem('key', 'value');
localStorageCache.setItem('key', 'value', 1000) // set expiration time
localStorageCache.setItem('key', 'value', 'EX', 1000) // set expiration time in second
```

Get data

```js
localStorageCache.getItem('key') // value
```

Remove data

```js
localStorageCache.removeItem('key')
```

Clear all data within the storage scope

```js
localStorageCache.clear()
```

## License

This project is licensed under the [MIT](./LICENSE) License.
