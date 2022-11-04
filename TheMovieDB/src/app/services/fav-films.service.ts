import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { FavFilmResponse } from "../interfaces/fav-films-interfaces";

@Injectable({
  providedIn: "root",
})
export class FavFilmsService {
  constructor(private http: HttpClient) {}

  getFavFilms(id: number, sessionId: string): Observable<FavFilmResponse> {
    return this.http.get<FavFilmResponse>(
      `${environment.API_BASE_URL}/account/${id}/favorite/movies?api_key=${environment.api_key}&session_id=${sessionId}`
    );
  }
}
