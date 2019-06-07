import PersonBuilder from './model/person.builder';
import Person from './model/person.model';

async function primePerson() {

  const person:Person = await new PersonBuilder('Ralph')
    .then( (p: Person) => {
      console.log("Second stage of stuff");
      throw new Error("Bad Stuff Happened");
    })
    .catch( (err:Error) =>{
      console.log({err});
      return new PersonBuilder('Default');
    })
    .then((p: Person) => {
      console.log(`Blew up. Using default: ${p}`);
      return p;
    });
  console.log(`I am ${person}`);

  return person;
}

primePerson()
  .then(person => console.log(person))
  .catch(err => console.log(err));
