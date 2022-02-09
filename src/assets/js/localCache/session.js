// 设置appCode
const appCode = 'APP-CODE-KEY'
export const sessionAppCode = {
  set(val) {
    sessionStorage.setItem(appCode, val)
  },
  get() {
    return sessionStorage.getItem(appCode)
  },
  remove() {
    sessionStorage.removeItem(appCode)
  }
}

