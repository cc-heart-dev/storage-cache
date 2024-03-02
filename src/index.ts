import { useContext } from "./ctx";
import { enhancementNamespace } from "./enhancement";
import { storageCacheFactory } from "./local-storage";
import { Storage } from './helper'

export function defineStorage(namespace: string) {

  const [ctx] = useContext({ namespace: enhancementNamespace(namespace) })
  const [localStorageCache, sessionStorageCache] = [Storage.LOCAL, Storage.SESSION].map(storageEnum => storageCacheFactory(ctx, storageEnum))

  return { localStorageCache, sessionStorageCache }
}