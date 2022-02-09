import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
 providedIn: 'root'
})
export class OpenWeatherService {
 constructor(
 private http: HttpClient
 ) { }
 API_KEY = '0803c6c86e5859158a69011934b96ed7';
 getWeather(location: any): any {
 return this.http.get(
 `https://api.openweathermap.org/data/2.5/weather?appid=${this.API_KEY}&units=metric&q=${location}`
 );
 }
}
