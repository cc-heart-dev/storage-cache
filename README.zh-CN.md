# storage-cache

storage-cache 是一个用于增强浏览器原生 `localStorage` 和 `sessionStorage` 的工具库。通过该库，您可以更灵活地管理存储数据，避免数据之间的相互干扰，并轻松设置数据的过期时间。

## 功能特点

- **storage 作用域隔离**
- **支持设置过期时间**

## 安装

```shell
npm install @cc-heart/storage-cache
```

## 使用方法

创建 storage-cache 实例化对象

```js
import { defineStorage } from '@cc-heart/storage-cache';

const { localStorageCache, sessionStorageCache } = defineStorage('namespace');
```

设置数据

```js
localStorageCache.setItem('key', 'value');
localStorageCache.setItem('key', 'value', 1000) // set expiration time
localStorageCache.setItem('key', 'value', 'EX', 1000) // set expiration time in second
```

获取数据

```js
localStorageCache.getItem('key') // value
```

清除数据

```js
localStorageCache.removeItem('key')
```

清除 storage 作用域下的所有数据

```js
localStorageCache.clear()
```

## License

本项目遵循 [MIT](./LICENSE) 协议
