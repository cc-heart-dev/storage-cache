import { setContext } from "./ctx";
import { enhancementNamespace } from "./enhancement";
import { storageCacheFactory } from "./storage";
import { Storage } from './helper'

export function defineStorage(namespace: string) {

  const ctx = setContext({ namespace: enhancementNamespace(namespace) })
  const [localStorageCache, sessionStorageCache] = [Storage.LOCAL, Storage.SESSION].map(storageEnum => storageCacheFactory(ctx, storageEnum))

  return { localStorageCache, sessionStorageCache }
}