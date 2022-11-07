import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { CreditsResponse } from '../interfaces/movie-cast-interface';
import { MovieDetailsResponse } from '../interfaces/movie-details-interface';
import { MovieVideoResponse } from '../interfaces/movie-videos';
import { MoviesResponse } from '../interfaces/movies-interface';
import { RatedFilmsResponse } from '../interfaces/rated-films-interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http : HttpClient) {}

  /* Método que obtiene la lista de películas populares */

  public getListMovies (page : number) : Observable<MoviesResponse>{
    return this.http.get<MoviesResponse>(`${environment.API_BASE_URL}/movie/popular?api_key=${environment.api_key}&page=${page}`)
  }

  public getMovieDetails (id : number) : Observable<MovieDetailsResponse>{
    return this.http.get<MovieDetailsResponse>(`${environment.API_BASE_URL}/movie/${id}?api_key=${environment.api_key}`)
  }

  public getCredits(id : number) : Observable<CreditsResponse>{
    return this.http.get<CreditsResponse>(`${environment.API_BASE_URL}/movie/${id}/credits?api_key=${environment.api_key}`)
  }

  public getVideosMovie(id: number) : Observable<MovieVideoResponse>{
    return this.http.get<MovieVideoResponse>(`${environment.API_BASE_URL}/movie/${id}/videos?api_key=${environment.api_key}`)
  }

  public getRatedMovies(id : number, sessionId : string) : Observable<RatedFilmsResponse> {
    return this.http.get<RatedFilmsResponse>(`${environment.API_BASE_URL}/account/${id}/rated/movies?api_key=${environment.api_key}&session_id=${sessionId}`)
  }
}
