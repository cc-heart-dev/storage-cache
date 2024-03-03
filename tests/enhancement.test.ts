import { it, expect, vi, describe, beforeEach } from 'vitest'
import { formatValue } from '../src/enhancement'


describe('formatValue func', () => {
  beforeEach(() => {
    vi.spyOn(Date, 'now').mockImplementation(() => 1709437430278);

  })
  it('formatValue with three arguments and PX', () => {
    const curTime = Date.now()
    const value = 'test'
    const expiredTime = curTime + 1
    const target = { curTime, value, expiredTime }
    const result = formatValue(value, 'PX', 1)
    expect(result).toEqual(JSON.stringify(target))
  })

  it('formatValue with three arguments and EX', () => {
    const curTime = Date.now()
    const value = 'test'
    const expiredTime = curTime + 1000
    const target = { curTime, value, expiredTime }
    const result = formatValue(value, 'EX', 1)
    expect(result).toEqual(JSON.stringify(target))
  })

  it('formatValue with two arguments', () => {
    // 模拟传入两个参数的情况
    const result = formatValue('some value', 1000);
    // 验证返回的结果是否符合预期
    expect(result).toMatch(/"curTime":\d+,"value":"some value","expiredTime":\d+/);
  });
})

