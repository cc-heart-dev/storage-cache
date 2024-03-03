# Storage Cache

Storage Cache is a library for scoping APIs stored in browser local storage, aimed at preventing conflicts when using APIs in the same origin environment.

## Installation

You can install Storage Cache via npm:

```shell
npm install @cc-heart/storage-cache
```


## Usage

Creating a StorageCache Instance

```js
import { defineStorage } from '@cc-heart/storage-cache';

const { localStorageCache, sessionStorageCache } = new defineStorage('namespace');
```

set data:

```js
localStorageCache.setItem('key', 'value');
localStorageCache.setItem('key', 'value', 1000) // set expiration time
localStorageCache.setItem('key', 'value', 'EX', 1000) // set expiration time in second
```

get data:

```js
localStorageCache.getItem('key') // value
```

remove data:

```js
localStorageCache.removeItem('key')
```

clean up all storage under the scope:

```js
localStorageCache.clear()
```

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

