import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";

// components for views and layouts

import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { CardProfileComponent } from "./components/cards/card-profile/card-profile.component";
import { CardStatsComponent } from "./components/cards/card-stats/card-stats.component";
import { FooterAdminComponent } from "./components/footers/footer-admin/footer-admin.component";
import { FooterComponent } from "./components/footers/footer/footer.component";
import { FooterSmallComponent } from "./components/footers/footer-small/footer-small.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { IndexNavbarComponent } from "./components/navbars/index-navbar/index-navbar.component";
import { MapExampleComponent } from "./components/maps/map-example/map-example.component";
import { IndexDropdownComponent } from "./components/dropdowns/index-dropdown/index-dropdown.component";

import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { UserDropdownComponent } from "./components/dropdowns/user-dropdown/user-dropdown.component";
import { HttpClientModule } from "@angular/common/http";
import { CardBarActorComponent } from "./components/cards/card-bar-actor/card-bar-actor.component";
import { ActorDetailsComponent } from './views/actor-details/actor-details.component';
import { CardProfileActorComponent } from './components/cards/card-profile-actor/card-profile-actor.component';
import { CardBarMoviesComponent } from './components/cards/card-bar-movies/card-bar-movies.component';
import { CardBarFavFilmsComponent } from './components/cards/card-bar-fav-films/card-bar-fav-films.component';
import { MovieDetailsComponent } from './views/movie-details/movie-details.component';
import { CardMovieDetailsComponent } from './components/cards/card-movie-details/card-movie-details.component';
import { FavFilmsComponent } from "./views/admin/fav-films/fav-films.component";
import { CardBarRatedMoviesComponent } from './components/cards/card-bar-rated-movies/card-bar-rated-movies.component';
import { RatedFilmsComponent } from './views/admin/rated-films/rated-films.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IndexDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    CardProfileComponent,
    CardStatsComponent,
    HeaderStatsComponent,
    MapExampleComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    AuthComponent,
    MapsComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    LandingComponent,
    ProfileComponent,
    CardBarActorComponent,
    ActorDetailsComponent,
    CardProfileActorComponent,
    CardBarMoviesComponent,
    CardBarFavFilmsComponent,
    CardMovieDetailsComponent,
    FavFilmsComponent,
    MovieDetailsComponent,
    CardBarRatedMoviesComponent,
    RatedFilmsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
