import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'https://tr360-frontend-exam-april.azurewebsites.net/Emens7/movies';

  constructor(private client: HttpClient) { }

  getMovieList(): Observable<Movie[]> {
    return this.client.get<Movie[]>(this.BASE_URL);
  }

  deleteMovie(id):Observable<any> {
    return this.client.delete(`${this.BASE_URL}/${id}`);
  }
}
