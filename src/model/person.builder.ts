import * as bluebird from 'bluebird';

import Person from './person.model';
import Builder from '../util/builder.util';

export default class PersonBuilder extends Builder<Person> {

  private readonly person: Person = new Person(null);

  constructor(name: string) {
    super();
    this.person.name = name;
  }

  async build(resolve, reject) {
    console.log("Connecting to name server to fulfill person properties.....");

    await bluebird.delay(3000).then(() => console.log("Waited 3 seconds"));

    console.log(`New Person with name: ${this.person.name}`);

    if (this.person.name) {
      return resolve(this.person);
    }
    return reject(new Error("Bad Person"));
  }
}
