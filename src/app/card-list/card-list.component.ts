import { Component } from '@angular/core';
import { Card } from '../shared/models/card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  cards: Card[] = [
    new Card('CACA', 'awda', '../../assets/271.webp'),
    new Card('CACA', 'awda', '../../assets/271.webp'),
    new Card('CACA', 'awda', '../../assets/271.webp'),
    new Card('CACA', 'awda', '../../assets/271.webp'),

  ];

  ngOnInit() {

  }
}
