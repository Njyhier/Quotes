import { Component, signal } from '@angular/core';
import { InputForm } from './input-form/input-form';
import { QuoteComponent } from './quote/quote';

@Component({
  selector: 'app-root',
  imports: [InputForm, QuoteComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Quotes');
}
