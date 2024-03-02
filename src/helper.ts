export interface Context {
  namespace: string; // storage namespace
}

export type TimeType = 'EX' | 'PX'

export enum Storage {
  LOCAL = 'localStorage',
  SESSION ='sessionStorage'
}