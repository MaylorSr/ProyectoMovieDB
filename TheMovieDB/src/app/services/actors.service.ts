import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { PeopleRespon } from "../interfaces/actors-interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ActorResponse } from "../interfaces/actorDetails-interface";

@Injectable({
  providedIn: "root",
})
export class ActorsService {
  constructor(private http: HttpClient) {}

  /**
   * Get the list of people in tv
   * @returns the list of people on the movie
   */
  getListPeople(page: number): Observable<PeopleRespon> {
    return this.http.get<PeopleRespon>(
      `${environment.API_BASE_URL}/person/popular?api_key=${environment.api_key}&language=es-ES&page=${page}`
    );
  }

  getActorInfo(id: number): Observable<ActorResponse> {
    return this.http.get<ActorResponse>(
      `${environment.API_BASE_URL}/person/${id}?api_key=${environment.api_key}&language=en-US`
    );
  }
}
