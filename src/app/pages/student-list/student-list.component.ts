import { Component, OnInit } from "@angular/core";
import { ChristianPerson, PeriodicElement } from "src/app/dto/dtos";
import { PersonService } from "src/app/services/personService";

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
];
@Component({
  selector: "student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"],
})
export class StudentListComponent implements OnInit {
  displayedColumns: string[] = [
    "christianName",
    "firstName",
    "lastName",
    "birth",
    "actions",
  ];
  dataSource: ChristianPerson[] = [];
  grades: any[] = [];

  constructor(personService: PersonService) {
    personService.getChristianPerson(
      (d: ChristianPerson[]) => (this.dataSource = d)
    );
    this.grades = [
      {
        text: "Khai Tâm",
        value: "1",
      },
      {
        text: "Rước Lễ",
        value: "2",
      },
      {
        text: "Thêm Sức",
        value: "3",
      },
      {
        text: "Sống Đạo",
        value: "4",
      },
    ];

  }

  ngOnInit(): void {}
}
