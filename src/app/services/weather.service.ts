import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  lat = 33.44;
  lon = -94.04;

  constructor(private http: HttpClient) { }
  getWeatherData(){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=são paulo&appid=${environment.apiKey}`);
  }
  // getWeatherData(cityName: string): Observable<WeatherData> {
  //   return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
  //     headers: new HttpHeaders()
  //     .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
  //     .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeadeValue),
  //     params: new HttpParams()
  //     .set('q', cityName)
  //     .set('units', 'metric')
  //     .set('mode', 'json')
  //   })
  // }
}
