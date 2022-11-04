import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { RequestTokenResponse } from "../interfaces/request-token.interface";
import { HttpClient } from "@angular/common/http";
import { CreateSessionResponse } from "../interfaces/create-session.interface";
import { DetailResponse } from "../interfaces/details-user.interface";
import { CreateSessionDto } from "../dto/create-session.dto";
import { DeleteSessionResponse } from "../interfaces/delete-session.interface";
import { DeleteSessionDto } from "../dto/delete-session.dto";

@Injectable({
  providedIn: "root",
})
export class IndexLoginService {
  constructor(private http: HttpClient) {}

  createRequestToken(): Observable<RequestTokenResponse> {
    return this.http.get<RequestTokenResponse>(
      `${environment.API_BASE_URL}/authentication/token/new?api_key=${environment.api_key}`
    );
  }

  createSession(
    sessionDto: CreateSessionDto
  ): Observable<CreateSessionResponse> {
    return this.http.post<CreateSessionResponse>(
      `${environment.API_BASE_URL}/authentication/session/new?api_key=${environment.api_key}`,
      sessionDto
    );
  }

  deleteSession(
    deleteSessionDto: DeleteSessionDto
  ): Observable<DeleteSessionResponse> {
    return this.http.delete<DeleteSessionResponse>(
      `${environment.API_BASE_URL}/authentication/session?api_key=${environment.API_BASE_URL}`
    );
  }

  getInfoUser(): Observable<DetailResponse> {
    return this.http.get<DetailResponse>(
      `${environment.API_BASE_URL}/account?api_key=${
        environment.api_key
      }&session_id=${localStorage.getItem("session_id")}`
    );
  }
}
