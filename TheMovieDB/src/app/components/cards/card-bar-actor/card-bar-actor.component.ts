import { Component, Input, OnInit } from "@angular/core";
import { Result } from "src/app/interfaces/actors-interface";
import { ActorsService } from "src/app/services/actors.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-card-bar-actor",
  templateUrl: "./card-bar-actor.component.html",
  styleUrls: ["./card-bar-actor.component.css"],
})
export class CardBarActorComponent implements OnInit {
  constructor(private listActService: ActorsService) {}
  @Input() actor: Result = {} as Result;

  numPagesTotal = 0;
  pageActual = 1;
  listPeople: Result[] = [];

  ngOnInit() {
    this.showListPeople(this.pageActual);
  }
  ngAfterViewInit() {}
  showImgPeople(people: Result) {
    return `${environment.api_base_img}${people.profile_path}`;
  }

  counter() {
    return new Array(this.numPagesTotal);
  }

  nextPage() {
    if (this.pageActual < this.numPagesTotal) {
      this.pageActual = this.pageActual + 1;
      this.listActService.getListPeople(this.pageActual).subscribe((res) => {
        this.listPeople = res.results;
        this.numPagesTotal = Math.ceil(res.total_pages / 10);
      });
    }
  }
  backPage() {
    if (this.pageActual > 1) {
      this.pageActual = this.pageActual - 1;
      this.listActService.getListPeople(this.pageActual).subscribe((res) => {
        this.listPeople = res.results;
        this.numPagesTotal = Math.ceil(res.total_pages / 10);
      });
    }
  }

  showListPeople(pageActual: number) {
    this.listActService.getListPeople(pageActual).subscribe((res) => {
      this.listPeople = res.results;
      this.numPagesTotal = Math.ceil(res.total_pages / 10);
    });
  }

  /**
   * Result hace referencia al objeto tipo people que seria en ese caso
   * @param se le pasa un objeto tipo people


  showInfoPeople(people: Result) {
    this.peopleInfo.getPeopleInfo(people).subscribe((res) => {
      this.peopleSeleccted = res;
      this.dialog.open(PeopleInfoComponent, {
        data: {
          peopleInfo: this.peopleSeleccted,
          peopleInfoFilms: people.known_for,
        },
      });
    });
  }
   */
}
