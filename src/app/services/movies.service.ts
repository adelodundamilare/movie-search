import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { SearchModel } from '../models/search_model';
import { SingleMovieModel } from '../models/single_movie_model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  constructor(private _http: HttpClient) {}

  searchMovies(query: string): Observable<SearchModel[]> {
    const url: string = `${environment.apiUrl}/search/movie?api_key=${environment.apiToken}&query=`;

    return this._http.get<any[]>(url + query);
  }

  getSingleMovie(movieId: number): Observable<SingleMovieModel> {
    const url: string = `${environment.apiUrl}/movie/${movieId}?api_key=${environment.apiToken}&append_to_response=videos,credits`;

    return this._http.get<SingleMovieModel>(url);
  }
}
