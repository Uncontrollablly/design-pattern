export class Singleton {
  private constructor() {}

  private static _instance: Singleton;

  static getInstance(): Singleton {
    if (!Singleton._instance) {
      Singleton._instance = new Singleton();
    }
    return this._instance;
  }

  show(): void {
    console.log('I am a singleton object.');
  }
}
