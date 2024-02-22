import { Component} from '@angular/core';
import { Card } from '../shared/interfaces/card';
import { inject } from '@angular/core';
import { CardSelectService } from '../services/card-select.service';
import { CardComponent } from './card/card.component';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  cardSelectService: CardSelectService = inject(CardSelectService);
  cards: Card[] = []


  selectedCard: Card | undefined;

  constructor() {
    this.cardSelectService.getAllCards().then((cards: Card[]) => {
      this.cards = cards;
      console.log(cards)
    });
  }

  ngOnInit() {

  }

  onSelectcard() {

  }
}
