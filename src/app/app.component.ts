import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';
import { Main } from './models/weather.model';

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
      this.weatherData = response;
      console.log(this.weatherData);
    })
  }
}
