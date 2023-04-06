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
  ngOnInit(): void{
    this.cityName = "São Paulo";
    this.getWeatherData(this.cityName);
    this.cityName = "";
  }

  public cityName: String = '';

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = "";
  }

  weatherData?: WeatherData;

  public getWeatherData(cityName: String){
    this.weatherService.getWeatherData(cityName)
    .subscribe(response =>{
      this.weatherData = response;
    })
  }


}
