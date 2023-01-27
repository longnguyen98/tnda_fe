import { Component, OnInit } from "@angular/core";
import { ChristianPerson, Group } from "src/app/dto/dtos";
import { PersonService } from "src/app/services/personService";

@Component({
  selector: "student-detail",
  templateUrl: "./student-detail.component.html",
  styleUrls: ["./student-detail.component.css"],
})
export class StudentDetailComponent implements OnInit {
  displayedColumns: string[] = [
    "christianName",
    "firstName",
    "lastName",
    "birth",
    "role",
    "actions",
  ];
  groupDisplayedColumns: string[] = ["groupName", "something", "actions"];
  relatedPeople: ChristianPerson[] = [];
  relatedGroup: Group[] = [];

  constructor(personService: PersonService) {
    personService.getChristianPerson(
      (d: ChristianPerson[]) =>
        (this.relatedPeople = d.map((e) => {
          // e.role = "role";
          return e;
        }))
    );
    this.relatedGroup = [
      { id: "1", name: "Lớp Thêm Sức 1A" },
      { id: "2", name: "Gia đình ABC" },
    ];
  }

  ngOnInit(): void {}
}
