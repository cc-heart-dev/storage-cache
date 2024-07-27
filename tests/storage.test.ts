import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { Context, Storage, TimeType } from "../src/helper";
import { storageCacheFactory } from "../src/storage";

describe("storageCacheFactory", () => {
  let ctx: Context;
  let storage: Storage;

  beforeAll(() => {
    vi.useFakeTimers()
  })
  beforeEach(() => {
    ctx = { namespace: "test-" };
    storage = Storage.LOCAL;
  });

  it("should create a cache object with setItem, clear, getItem, and removeItem methods", () => {
    const cache = storageCacheFactory(ctx, storage);

    expect(cache.setItem).toBeInstanceOf(Function);
    expect(cache.clear).toBeInstanceOf(Function);
    expect(cache.getItem).toBeInstanceOf(Function);
    expect(cache.removeItem).toBeInstanceOf(Function);
  });

  it("should set an item in the cache", () => {
    const cache = storageCacheFactory(ctx, storage);
    const key = "test-key";
    const value = "test-value";

    cache.setItem(key, value);

    expect(cache.getItem(key)).toBe(value);
  });

  it("should remove an item from the cache", () => {
    const cache = storageCacheFactory(ctx, storage);
    const key = "test-key";
    const value = "test-value";

    cache.setItem(key, value);
    cache.removeItem(key);

    expect(cache.getItem(key)).toBeNull();
  });

  it("should clear all items from the cache", () => {
    const cache = storageCacheFactory(ctx, storage);
    const key1 = "test-key1";
    const value1 = "test-value1";
    const key2 = "test-key2";
    const value2 = "test-value2";

    cache.setItem(key1, value1);
    cache.setItem(key2, value2);
    cache.clear();

    expect(cache.getItem(key1)).toBeNull();
    expect(cache.getItem(key2)).toBeNull();
  });

  it("should set an item in the cache with an expiration time and PX", () => {
    const cache = storageCacheFactory(ctx, storage);
    const key = "test-key";
    const value = "test-value";
    const expirationTime = 1000;
    const timeType: TimeType = "PX";

    cache.setItem(key, value, timeType, expirationTime);

    setTimeout(() => {
      expect(cache.getItem(key)).toBeNull();
    }, 1001)

    expect(cache.getItem(key)).toBe(value);
    vi.runAllTimers()
  });

  it('should set item with expiration', () => {
    const ctx = { namespace: 'test_' };
    const storage = storageCacheFactory(ctx, Storage.LOCAL);
    storage.setItem('key2', 'value2', 1000);
    const retrievedValue = localStorage.getItem('test_key2');
    console.log(retrievedValue);

    expect(retrievedValue).toMatch(/"curTime":\d+,"value":"value2","expiredTime":\d+/);
  });


  it("should set an item in the cache with an expiration time and EX", () => {
    const cache = storageCacheFactory(ctx, storage);
    const key = "test-key";
    const value = "test-value";
    const expirationTime = 1;
    const timeType: TimeType = "EX";

    cache.setItem(key, value, timeType, expirationTime);

    setTimeout(() => {
      expect(cache.getItem(key)).toBeNull();
    }, 1001)

    expect(cache.getItem(key)).toBe(value);
    vi.runAllTimers()
  });

	it('displaying warn in a non-browser environment', () => {
		const __window = window
		const __warn = console.warn

		// @ts-ignore
		window = undefined
		console.warn = vi.fn()
		globalThis.window === undefined

		const cache = storageCacheFactory(ctx, storage)
		const key = "test-key"
		const value = "test-value"
		cache.setItem(key,value)

		expect(console.warn).toHaveBeenCalled()
		expect(console.warn).toHaveBeenCalledWith("Warning: Running in a non-browser environment.")

		window == __window
		console.warn = __warn
	})

});
