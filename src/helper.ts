export interface Context {
  namespace: string; // storage namespace
}

export type TimeType = 'EX' | 'PX'

export type StorageCallback = (storage: Storage) => any

export enum StorageType {
  LOCAL = 'localStorage',
  SESSION = 'sessionStorage'
}
