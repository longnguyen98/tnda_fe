import { Component, OnInit } from "@angular/core";
import { ChristianPerson } from "src/app/dto/dtos";
import { PersonService } from "src/app/services/personService";

@Component({
  selector: "checkin",
  templateUrl: "./checkin.component.html",
  styleUrls: ["./checkin.component.css"],
})
export class CheckinComponent implements OnInit {
  displayedColumns: string[] = [
    "christianName",
    "firstName",
    "lastName",
    "birth",
  ];
  dateColumns: string[] = [];
  people: ChristianPerson[] = [];
  days: Date[] = [];
  constructor(personService: PersonService) {
    personService.getChristianPerson(
      (d: ChristianPerson[]) => (this.people = d)
    );
  }

  ngOnInit(): void {
    console.log(this.getDays());
    this.days = this.getDaysInYear();
    this.dateColumns = this.days.map((d) => d.toDateString());
  }

  getDays(): Date[] {
    var d = new Date();
    var getTot = this.daysInMonth(d.getMonth(), d.getFullYear()); //Get total days in a month
    var sat = new Array(); //Declaring array for inserting Saturdays
    var sun = new Array(); //Declaring array for inserting Sundays

    for (var i = 1; i <= getTot; i++) {
      //looping through days in month
      var newDate = new Date(d.getFullYear(), d.getMonth(), i);
      if (newDate.getDay() == 0) {
        //if Sunday
        sun.push(newDate);
      }
    }
    return sun;
  }

  getDaysInYear(): Date[] {
    var sun = new Array(); //Declaring array for inserting Sundays
    var d = new Date();

    for (let month = 0; month < 12; month++) {
      var days = this.daysInMonth(month, d.getFullYear()); //Get total days in a month

      for (var day = 1; day <= days; day++) {
        //looping through days in year
        var newDate = new Date(d.getFullYear(), d.getMonth(), day);
        if (newDate.getDay() == 0) {
          //if Sunday
          sun.push(newDate);
        }
      }
    }
    return sun;
  }

  daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }
  monthInYear(year: number) {
    return new Date(year).getMonth();
  }
}
