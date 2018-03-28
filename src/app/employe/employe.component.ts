import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../model/Person';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  people: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.people = this.personService.getPeople();
  }

  addMore() {
    this.personService.addPerson(new Person('Vinod10', 'Kumar10'));
  }

}
