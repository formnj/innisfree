/**
 * 공통 유틸
 */
export default class CommonUtil {
  private static readonly REG_EXP_NUMERIC = /^-?(0|[1-9]\d*)(\.\d+)?$/
  private static readonly REG_EXP_NUMBER_COMMA = /\B(?=(\d{3})+(?!\d))/g

  /**
   * 문자 타입 체크
   */
  public static isTypeString(value: any): boolean {
    return typeof value === 'string'
  }

  /**
   * Empty 체크
   */
  public static isEmpty(value: unknown): boolean {
    switch (typeof value) {
      case 'undefined':
        return true
      case 'string':
        return value.trim() === ''
      case 'object':
        return value === null || Object.keys(value).length === 0
      default:
        return false
    }
  }

  /**
   * Not empty 체크
   */
  public static isNotEmpty(value: unknown): boolean {
    return !this.isEmpty(value)
  }

  /**
   * 숫자형 체크
   */
  public static isNumeric(value: string | number): boolean {
    return this.REG_EXP_NUMERIC.test(this.toStringValue(value))
  }

  /**
   * 문자열 변환
   */
  public static toStringValue(value: unknown): string {
    switch (typeof value) {
      case 'number':
        return value.toString()
      case 'string':
        return value.trim()
      default:
        return ''
    }
  }

  /**
   * Integer 변환
   */
  public static toInt(value: string | number): number {
    if (this.isNumeric(value)) {
      return parseInt(this.toStringValue(value), 10)
    }

    return 0
  }

  /**
   * 천단위 콤마 설정
   */
  public static numberComma(value: string | number): string {
    const tempValue = this.toStringValue(value)

    if (tempValue === '') {
      return '0'
    }

    const index = tempValue.indexOf('.')

    if (index === -1) {
      return tempValue.replace(this.REG_EXP_NUMBER_COMMA, ',')
    } else {
      return tempValue.substring(0, index).replace(this.REG_EXP_NUMBER_COMMA, ',') + tempValue.substring(index)
    }
  }
}
