import { Component, Input, OnInit } from "@angular/core";
import { Actor } from "src/app/interfaces/actors-interface";
import { ActorsService } from "src/app/services/actors.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-card-bar-actor",
  templateUrl: "./card-bar-actor.component.html",
  styleUrls: ["./card-bar-actor.component.css"],
})
export class CardBarActorComponent implements OnInit {
  constructor(private listActService: ActorsService) {}

  numPagesTotal = 0;
  page = 1
  pageActual : number = this.page;
  listPeople: Actor[] = [];
  @Input() actor: Actor = {} as Actor;

  ngOnInit() {

  }
  ngAfterViewInit() {}

  showImgPeople(actor: Actor) {
    return `${environment.api_base_img}${actor.profile_path}`;
  }

  nextPage() {
    if (this.pageActual < this.numPagesTotal) {
      this.listActService.getListPeople(this.pageActual).subscribe((res) => {
        this.listPeople = res.results;
        this.pageActual = this.pageActual + 1;
        this.numPagesTotal = Math.ceil(res.total_pages / 10);
      });
    }
  }

  backPage() {
    if (this.pageActual > 1) {
      this.listActService.getListPeople(this.pageActual).subscribe((res) => {
        this.listPeople = res.results;
        this.pageActual = this.pageActual - 1;
        this.numPagesTotal = Math.ceil(res.total_pages / 10);
      });
    }
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
