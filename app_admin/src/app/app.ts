import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import {Navbar} from './navbar/navbar';


@Component({
  imports: [CommonModule, RouterOutlet, Navbar],
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = signal('Travlr Getaways Admin!');
}