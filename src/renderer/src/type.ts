export type Platform = 'steam' | 'epic' 


export interface Game {
  id: string
  title: string
  platform: Platform
  genre: string
  playtimeHours: number
  coverUrl: string
}