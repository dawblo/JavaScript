import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OpenWeatherService } from '../open-weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  constructor(
    private formBuilder: FormBuilder,
    private openWeatherService: OpenWeatherService
  ) 
  {
    this.weatherSearchForm = this.formBuilder.group({
      city: ['', Validators.required]
    });
  }
  checkWeather(): void {
    if (this.weatherSearchForm.valid) {
      this.openWeatherService
        .getWeather(this.weatherSearchForm.value.city)
        .subscribe((data :any) => this.weatherData = data)
      console.log(this.weatherData);
    }
  }
  ngOnInit(): void {
  }
}