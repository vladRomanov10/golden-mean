import { Injectable } from '@angular/core'

@Injectable()
export class PersistenceService {
  getCookie(name: string): string | null {
    const nameEQ: string = name + '='
    const allCookies = document.cookie.split(';')

    const cookie: string | undefined = allCookies.find((cookie: string) => {
      const c = cookie.trim()
      return c.indexOf(nameEQ) === 0
    })

    if (cookie) {
      return cookie.substring(nameEQ.length, cookie.length)
    }
    return null
  }
}
