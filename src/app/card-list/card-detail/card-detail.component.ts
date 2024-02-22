import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CardSelectService } from 'src/app/services/card-select.service';
import { Card } from 'src/app/shared/interfaces/card';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
 
export class CardDetailComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  cardService: CardSelectService = inject(CardSelectService);
  card: Card | undefined;

  constructor() {
    const cardId = Number(this.route.snapshot.params['id']);
    this.cardService.getProductById(cardId).then(card => {
      this.card = card;
    });
    console.log(this.card);
  }


}
