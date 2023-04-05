import { environment } from '../../environments/environments';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  API_URL = environment.API_BASE_URL;
  API_KEY = environment.API_KEY;
  UNITS = environment.UNITS;
  LANG = environment.LANG;

  constructor(private http: HttpClient) { }
  getWeatherData(){
    return this.http.get<WeatherData>(`${this.API_URL}Sergipe&appid=${this.API_KEY}&units=${this.UNITS}&lang=${this.LANG}`);
  }

}
