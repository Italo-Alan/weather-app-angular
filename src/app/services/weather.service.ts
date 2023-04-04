import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  API_URL = environment.API_BASE_URL;
  API_KEY = environment.API_KEY;
  lat = 33.44;
  lon = -94.04;

  constructor(private http: HttpClient) { }
  getWeatherData(){
    return this.http.get(`${this.API_URL}são paulo&appid=${this.API_KEY}`);
  }

}
