import { Component } from '@angular/core';
import { Quote } from '../quote'
import { CommonModule } from '@angular/common';@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote.html',
  styleUrl: './quote.css'
})
export class QuoteComponent {
 quotes: Quote[] =[
  {author:'Njyhier', quote: 'Test Quote', id:1, upVotes:2, downVotes:3},
  {author:'Kangethe', quote: 'Quote ya kujaribu', id:1, upVotes:2, downVotes:3},
  {author:'Kamandura', quote: 'Bado ni kujaribu', id:2, upVotes:5, downVotes:2},
  {author:'Kuotara', quote: 'No kugeria maani', id:3, upVotes:9, downVotes:4}
 ];
}
