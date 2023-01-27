import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { LoginFormComponent } from "src/app/components/login-form/login-form.component";

@Component({
  selector: "main-layout",
  templateUrl: "./main-layout.component.html",
  styleUrls: ["./main-layout.component.css"],
})
export class MainLayoutComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginFormComponent, {});
  }
}
