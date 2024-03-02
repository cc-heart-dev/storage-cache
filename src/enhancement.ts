import { TimeType } from "./helper"

function formatValue(value: string): string
function formatValue(value: string, expired: number): string
function formatValue(value: string, timeType: TimeType, expired: number): string


function formatValue() {
  const args = arguments
  const curTime = Date.now()
  const value = args[0]
  let expiredTime: number | undefined
  if (args.length === 2) {
    expiredTime = curTime + args[1]
  } else if (args.length === 3) {
    const expired = args[2]
    switch (args[1]) {
      case 'EX':
        expiredTime = curTime + expired * 1000
        break
      case 'PX':
        expiredTime = curTime + expired
        break
    }
  }
  const target = {
    curTime,
    value,
    expiredTime: expiredTime
  }
  return JSON.stringify(target)
}

export function enhancementNamespace(namespace: string) {
    return `__${namespace}__`
}

export {
  formatValue
}