import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WeatherData } from '../models/weather.model';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }
  getWeatherData(city: String){
    return this.http.get<WeatherData>(`${environment.API_BASE_URL}${city}&appid=${environment.API_KEY}&units=${environment.UNITS}&lang=${environment.LANG}`);
  }

}
