import { Card } from './../shared/interfaces/card';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardSelectService {

  url = 'http://localhost:3000/Cards';

  constructor() {}

  async getAllCards(): Promise <Card[]>{ 
    const Data = await fetch(this.url);
    return await Data.json() ?? [] ;
  }

  async getProductById(id: number): Promise <Card | undefined>{
    
    const Data = await fetch(`${this.url}/${id}`);
    console.log(Data)
    return await Data.json() ?? [];
  }
}
