import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ForbiddenComponent } from "./components/forbidden/forbidden.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { StudentDetailComponent } from "./components/student-detail/student-detail.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";
import { CheckinProcessComponent } from "./pages/checkin-process/checkin-process.component";
import { CheckinComponent } from "./pages/checkin/checkin.component";
import { HomeComponent } from "./pages/home/home.component";
import { StudentListComponent } from "./pages/student-list/student-list.component";

export const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "list",
        component: StudentListComponent,
      },
      {
        path: "detail",
        component: StudentDetailComponent,
      },
      {
        path: "checkin",
        component: CheckinComponent,
      },
      {
        path: "checkin-process",
        component: CheckinProcessComponent,
      },
    ],
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "login",
        component: LoginFormComponent,
      },
      {
        path: "forbidden",
        component: ForbiddenComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
