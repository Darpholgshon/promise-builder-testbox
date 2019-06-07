
export default class Person {
  private _name: string;

  constructor(name) {
    this.name = name;
  }

  get name(): string {
    return this._name;
  };

  set name(name: string) {
    this._name = name;
  };
}

