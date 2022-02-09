import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import {ReactiveFormsModule} from '@angular/forms'; //obsluga formularzy
import {HttpClientModule} from '@angular/common/http';
import {OpenWeatherService} from './open-weather.service';//komunikacja z api
@NgModule({
 declarations: [
 AppComponent,
 WeatherComponent,
 ],
 imports: [
 BrowserModule,
 ReactiveFormsModule,
 HttpClientModule,
 ],
 providers: [
 OpenWeatherService,
 ],
 bootstrap: [AppComponent]
})
export class AppModule { }
