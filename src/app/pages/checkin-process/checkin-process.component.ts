import { Component, OnInit } from "@angular/core";
import { MOCK_CHECKIN_LIST } from "src/app/dto/data";
import { CHECKIN_STATUS, ChristianPerson, PersonCheckin } from "src/app/dto/dtos";
import { PersonService } from "src/app/services/personService";

@Component({
  selector: "checkin-process",
  templateUrl: "./checkin-process.component.html",
  styleUrls: ["./checkin-process.component.css"],
})
export class CheckinProcessComponent implements OnInit {
  peopleCheckin: PersonCheckin[] = [];
  people: ChristianPerson[] = [];
  displayedColumns: string[] = ["name", "birth", "note", "status", "actions"];
  CHECKIN_STATUS = CHECKIN_STATUS;
  constructor(ps: PersonService) {
    this.peopleCheckin = MOCK_CHECKIN_LIST;
    ps.getChristianPerson((d: ChristianPerson[]) => (this.people = d));
    this.peopleCheckin = this.peopleCheckin.map((e) => {
      e.person = this.people.find((p) => p.id == e.personId);
      return e;
    });
  }

  ngOnInit(): void {}

  getCheckinStatus(status: string): string {
    switch (status) {
      case CHECKIN_STATUS.PRESENT:
        return "Có mặt";
      case CHECKIN_STATUS.ABSENT:
        return "Vắng";
      case CHECKIN_STATUS.ABSENT_PERMITTED:
        return "Phép";
    }
    return "";
  }

  setCheckinStatus(personId: string, status: string) {
    let pc = this.peopleCheckin.find((pc) => pc.personId == personId);
    pc!.status = status;
  }
}
