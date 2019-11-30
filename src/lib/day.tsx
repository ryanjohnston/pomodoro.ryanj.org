import { Pomodoro } from './pomodoro'

export class Day {
  private _pomodoro: Pomodoro

  constructor() {
    this._pomodoro = new Pomodoro()
  }

  public world(): string {
    return this._pomodoro.hello()
  }
}
