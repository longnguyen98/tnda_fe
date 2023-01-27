import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.route";

import { LoginFormComponent } from "./components/login-form/login-form.component";
import { StudentDetailComponent } from "./components/student-detail/student-detail.component";
import { CoreModule } from "./core/core.module";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";
import { CheckinProcessComponent } from "./pages/checkin-process/checkin-process.component";
import { CheckinComponent } from "./pages/checkin/checkin.component";
import { HomeComponent } from "./pages/home/home.component";
import { StudentListComponent } from "./pages/student-list/student-list.component";
import { SharedModule } from "./shared/shared.module";
import { ForbiddenComponent } from './components/forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentListComponent,
    StudentDetailComponent,
    CheckinComponent,
    CheckinProcessComponent,
    LoginFormComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    ForbiddenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, CoreModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
