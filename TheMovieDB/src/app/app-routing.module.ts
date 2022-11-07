import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";
import { ActorDetailsComponent } from "./views/actor-details/actor-details.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { FavFilmsComponent } from "./views/admin/fav-films/fav-films.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { MovieDetailsComponent } from "./views/movie-details/movie-details.component";
import { ProfileComponent } from "./views/profile/profile.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "actors/", component: DashboardComponent },
      {
        path: "actor-info/:id",
        component: ActorDetailsComponent,
      },

      /*Rutas Movies*/
      { path : "movies", component: DashboardComponent },
      { path : "movies-info/:id", component:MovieDetailsComponent },
      /*------------------*/

      { path: "settings", component: SettingsComponent },
      { path: "tables", component: TablesComponent },
      { path: "maps", component: MapsComponent },
      { path: "", redirectTo: "actors", pathMatch: "full" },

      { path: "movies", component: DashboardComponent },
      { path: "fav/Films", component: FavFilmsComponent },
      { path: "**", redirectTo: "actors/", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // no layout views
  { path: "profile", component: ProfileComponent },
  { path: "**", redirectTo: "/admin/actors/", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
