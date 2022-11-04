import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Actor } from "src/app/interfaces/actors-interface";
import { PopularMovie } from "src/app/interfaces/movies-interface";
import { ActorsService } from "src/app/services/actors.service";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  numPagesTotal = 0;
  pageActual = 1;
  listActor: Actor[] = [];

  /*URL actual --> example: 'movies' or 'actors'*/
  showingNow: String = "";
  /*---------------*/

   /*MOVIES ATRIBUTES*/
   numPagesTotalMovies = 0;
   pageActualMovies = 0;
   listMovies : PopularMovie[] = [];
   /*---------------*/

  constructor(private listActService: ActorsService, private moviesService : MoviesService, private router : Router) {}

  ngOnInit() {
    this.showListPeople(1);
    this.showListMovies(1);
    this.showingNow = this.router.url.split("/")[2];
  }

  /*ACTORS METHODS*/
  showListPeople(page : number) {
    this.listActService.getListPeople(page).subscribe((res) => {
      this.listActor = res.results;
      this.numPagesTotal = res.total_pages;
      this.pageActual = page;
    });
  }

  nextPage() {
    if (this.pageActual < this.numPagesTotal) {
      this.pageActual++;
      this.showListPeople(this.pageActual)
    }
  }

  backPage() {
    if (this.pageActual > 1) {
      this.pageActual--;
      this.showListPeople(this.pageActual);
    }
  }
   /*---------------*/

  /*MOVIES METHODS*/
  showListMovies(page : number){
    this.moviesService.getListMovies(page).subscribe(res => {
      this.listMovies = res.results;
      this.numPagesTotalMovies = res.total_pages;
      this.pageActualMovies = page;
    })
  }

  nextPageMovies() {
    if (this.pageActualMovies < this.numPagesTotalMovies) {
      this.pageActualMovies++
      this.showListMovies(this.pageActualMovies)
    }
  }

  backPageMovies() {
    if (this.pageActualMovies > 1) {
      this.pageActualMovies--
      this.showListMovies(this.pageActualMovies)
    }
  }
  /*---------------*/

}
