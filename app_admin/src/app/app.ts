import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import {TripListing} from './trip-listing/trip-listing';


@Component({
  imports: [CommonModule, RouterOutlet, TripListing],
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = signal('Travlr Getaways Admin!');
}