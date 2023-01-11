import {Injectable} from '@angular/core'

@Injectable()
export class PersistanceService {
  public set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.error('Error saving to localStorage', error)
    }
  }

  public get(key: string): any {
    try {
      //@ts-ignore
      return JSON.parse(localStorage.getItem(key))
    } catch (error) {
      console.log('Error getting data from localStorage', error)
      return null
    }
  }
}
