import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { MoviesResponse } from '../interfaces/movies-interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http : HttpClient) {}

  /* Método que obtiene la lista de películas populares */

  public getListMovies (page : number) : Observable<MoviesResponse>{
    return this.http.get<MoviesResponse>(`${environment.API_BASE_URL}/movie/popular?api_key=${environment.api_key}&page=${page}`)
  }
}
