import { setContext } from "./ctx";
import { enhancementNamespace } from "./enhancement";
import { storageCacheFactory } from "./storage";
import { StorageType } from './helper'

export function defineStorage(namespace: string) {

  const ctx = setContext({ namespace: enhancementNamespace(namespace) })
  const [localStorageCache, sessionStorageCache] = [StorageType.LOCAL, StorageType.SESSION].map(storageEnum => storageCacheFactory(ctx, storageEnum))

  return { localStorageCache, sessionStorageCache }
}