import { Context } from "./helper"

export function useContext(initContext: Context) {
  let state = initContext
  const setContext = (ctx: Partial<Context>) => {
    state = { ...state, ...ctx }
  }
  return [state, setContext] as const
}