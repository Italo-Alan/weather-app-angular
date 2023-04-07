import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WeatherData } from '../models/weather.model';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  API_BASE_URL: String = 'https://api.openweathermap.org/data/2.5/weather?q='
  API_KEY: String = '1419820775eaf67d81bdaeb18adafa16'
  UNITS: String ='metric'
  LANG: String ='pt_br'
  API_BASE_URL_3_0: String = 'https://api.openweathermap.org/data/3.0/onecall?'


  constructor(private http: HttpClient) { }
  getWeatherData(city: String){
    return this.http.get<WeatherData>(`${this.API_BASE_URL}${city}&appid=${this.API_KEY}&units=${this.UNITS}&lang=${this.LANG}`);
  }

}
