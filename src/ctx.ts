import type { Context } from "./helper"

let ctx = {} as Context

export function setContext(initContext: Context) {
  ctx = { ...ctx, ...initContext }
  return ctx
}