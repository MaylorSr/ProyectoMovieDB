import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CreateSessionDto } from "src/app/dto/create-session.dto";
import { DeleteSessionDto } from "src/app/dto/delete-session.dto";
import { IndexLoginService } from "src/app/services/index-login.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  collapseShow = "hidden";
  reqToken = "";
  approved = false;
  user_name = localStorage.getItem("user_name");
  avatar_path = localStorage.getItem("avatar_path");
  session_id = localStorage.getItem("session_id");
  id = localStorage.getItem("id");

  constructor(
    private indexServices: IndexLoginService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((qParams) => {
      const ap = qParams["approved"];
      const rToken = qParams["request_token"];
      this.approved = ap == "true" ? true : false;

      if (this.approved) {
        let session = new CreateSessionDto();
        session.request_token = rToken;
        this.indexServices.createSession(session).subscribe((resp) => {
          localStorage.setItem("session_id", resp.session_id);
          console.log("Session id: " + resp.session_id);
          this.getInfo();
        });
      } else {
        if (localStorage.getItem("session_id") != null) {
          console.log("Session id: " + localStorage.getItem("session_id"));
          this.approved = true;
        }
      }
    });
  }

  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }

  loginRequesToken() {
    this.indexServices.createRequestToken().subscribe((resp) => {
      this.reqToken = resp.request_token;
      console.log(this.reqToken);
      window.location.href = `https://www.themoviedb.org/authenticate/${this.reqToken}?redirect_to=${environment.api_hosting}/admin/actors/`;
    });
  }

  LogoutSession() {
    let deleteSessionDto = new DeleteSessionDto();
    if (localStorage.getItem("session_id") != null) {
      deleteSessionDto.session_id = localStorage.getItem("session_id")!;
      this.indexServices.deleteSession(deleteSessionDto).subscribe((resp) => {
        if (resp.success) {
          localStorage.removeItem("session_id");
          localStorage.removeItem("avatar_path");
          localStorage.removeItem("user_name");
          localStorage.removeItem("id");
          this.approved = false;
          window.location.href = `${environment.api_hosting}/admin/actors`;
        }
      });
    }
  }

  getInfo() {
    this.indexServices.getInfoUser().subscribe((res) => {
      localStorage.setItem("user_name", res.username);
      console.log("User name:" + res.username);
      localStorage.setItem("avatar_path", res.avatar.tmdb.avatar_path);
      console.log("avatar_path:" + res.avatar.tmdb.avatar_path);
      localStorage.setItem("id", String(res.id));
      console.log("id:", res.id);
    });
  }

  showAvatar() {
    return `https://image.tmdb.org/t/p/w400${localStorage.getItem(
      "avatar_path"
    )}`;
  }
}
