import { Component, OnInit } from "@angular/core";
import { Actor } from "src/app/interfaces/actors-interface";
import { ActorsService } from "src/app/services/actors.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  numPagesTotal = 0;
  pageActual = 1;
  listActor: Actor[] = [];
  constructor(private listActService: ActorsService) {}

  ngOnInit() {
    this.showListPeople();
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
}
