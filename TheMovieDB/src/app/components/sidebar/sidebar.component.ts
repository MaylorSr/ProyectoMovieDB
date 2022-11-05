import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CreateSessionDto } from "src/app/dto/create-session.dto";
import { IndexLoginService } from "src/app/services/index-login.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  collapseShow = "hidden";
  reqToken = "";
  approved = false;
  user_name = localStorage.getItem("user_name");
  avatar = localStorage.getItem("hash_img");
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
      window.location.href = `https://www.themoviedb.org/authenticate/${this.reqToken}?redirect_to=http://localhost:4200/admin/actors`;
    });
  }

  LogoutSession() {
    localStorage.removeItem("session_id");
    localStorage.removeItem("avatar");
    localStorage.removeItem("user_name");
    localStorage.removeItem("id");
    this.approved = false;
    window.location.href = `http://localhost:4200/admin/actors`;
  }

  getInfo() {
    this.indexServices.getInfoUser().subscribe((res) => {
      localStorage.setItem("user_name", res.username);
      console.log("User name:" + res.username);
      localStorage.setItem("avatar", res.avatar.gravatar.hash);
      console.log("Avatar hash:" + res.avatar.gravatar.hash);
      localStorage.setItem("id", String(res.id));
      console.log("id:", res.id);
    });
  }

  showAvatar(avatarUrl: string) {
    if (avatarUrl == "4d05ae5268d6133885591e677cea98fa") {
      return `https://www.themoviedb.org/t/p/w150_and_h150_face/${avatarUrl}.jpg`;
    }
    return `https://www.gravatar.com/avatar/${avatarUrl}.jpg?s=32`;
  }
}
