import { Component, OnInit } from "@angular/core";
import { Result } from "src/app/interfaces/actors-interface";
import { ActorsService } from "src/app/services/actors.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  numPagesTotal = 0;
  pageActual = 1;
  listActor: Result[] = [];
  constructor(private listActService: ActorsService) {}

  ngOnInit() {
    this.showListPeople(this.pageActual);
  }

  counter() {
    return new Array(this.numPagesTotal);
  }

  nextPage() {
    if (this.pageActual < this.numPagesTotal) {
      this.pageActual = this.pageActual + 1;
      this.listActService.getListPeople(this.pageActual).subscribe((res) => {
        this.listActor = res.results;
        this.numPagesTotal = Math.ceil(res.total_pages / 10);
      });
    }
  }
  backPage() {
    if (this.pageActual > 1) {
      this.pageActual = this.pageActual - 1;
      this.listActService.getListPeople(this.pageActual).subscribe((res) => {
        this.listActor = res.results;
        this.numPagesTotal = Math.ceil(res.total_pages / 10);
      });
    }
  }

  showListPeople(pageActual: number) {
    this.listActService.getListPeople(pageActual).subscribe((res) => {
      this.listActor = res.results;
      this.numPagesTotal = Math.ceil(res.total_pages / 10);
    });
  }
}
