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
   pageActualMovies = 1;
   listMovies : PopularMovie[] = [];
   /*---------------*/

  constructor(private listActService: ActorsService, private moviesService : MoviesService, private router : Router) {}

  ngOnInit() {
    this.showListPeople();
    this.showListMovies();
    this.showingNow = this.router.url.split("/")[2];
  }
  nextPage() {
    if (this.pageActual < this.numPagesTotal) {
      this.listActService.getListPeople(this.pageActual).subscribe((res) => {
        this.pageActual = this.pageActual + 1;
        this.listActor = res.results;
        this.numPagesTotal = Math.ceil(res.total_pages / 10);
      });
    }
  }
  backPage() {
    if (this.pageActual > 1) {
      this.listActService.getListPeople(this.pageActual).subscribe((res) => {
        this.listActor = res.results;
        this.pageActual = this.pageActual - 1;
        this.numPagesTotal = Math.ceil(res.total_pages / 10);
      });
    }
  }

  showListPeople() {
    this.listActService.getListPeople(this.pageActual).subscribe((res) => {
      this.listActor = res.results;
      this.numPagesTotal = Math.ceil(res.total_pages / 10);
    });
  }

  /*MOVIES METHODS*/
  showListMovies(){
    this.moviesService.getListMovies(this.pageActual).subscribe(res => {
      this.listMovies = res.results;
      this.numPagesTotal = Math.ceil(res.total_results/ 10);
    })
  }

  nextPageMovies() {
    if (this.pageActualMovies < this.numPagesTotalMovies) {
      this.moviesService.getListMovies(this.pageActualMovies).subscribe((res) => {
        this.pageActualMovies = this.pageActualMovies + 1;
        this.listMovies = res.results;
        this.numPagesTotalMovies = Math.ceil(res.total_results / 10);
      });
    }
  }

  backPageMovies() {
    if (this.pageActualMovies > 1) {
      this.moviesService.getListMovies(this.pageActualMovies).subscribe((res) => {
        this.listMovies = res.results;
        this.pageActualMovies = this.pageActualMovies - 1;
        this.numPagesTotalMovies = Math.ceil(res.total_results / 10);
      });
    }
  }
  /*---------------*/

}
