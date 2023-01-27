import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MOCK_PERSONS } from "../dto/data";

@Injectable()
export class PersonService {
  constructor(private http: HttpClient) {}

  getChristianPerson(onSuccess: any): void {
    let result = [];
    result = MOCK_PERSONS;
    onSuccess(result);
  }
}
