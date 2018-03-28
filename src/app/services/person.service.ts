import { Person } from "../model/Person";

export class PersonService {
   
    people: Person[] = [
        new Person('Vinod', 'Kumar'),
        new Person('Vinod1', 'Kumar1'),
        new Person('Vinod2', 'Kumar2'),
        new Person('Vinod3', 'Kumar3'),
        new Person('Vinod4', 'Kumar4'),
        new Person('Vinod5', 'Kumar5'),
    ]

    getPeople(): Person[] {
        return this.people;
    }

    addPerson(person: Person): void {
        this.people.push(person);
    }

}