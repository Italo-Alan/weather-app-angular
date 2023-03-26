import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weather-app';

  constructor(private weatherService: WeatherService){}

  weatherData?: WeatherData;

  ngOnInit(): void{
    this.weatherService.getWeatherData()
    .subscribe(response =>{
      console.log(response);
    })
  }
}
