import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class FavFilmsService {
  constructor(private http: HttpClient) {}

  getFavFilms(
    id: number,
    sessionId: number,
    page?: number
  ): Observable<FavFilmsService> {
    return this.http.get<FavFilmsService>(
      `${environment.API_BASE_URL}/account/${id}/favorite/movies?api_key=${environment.api_key}&session_id=${sessionId}&language=en-US&sort_by=created_at.asc&page=${page}`
    );
  }
}
