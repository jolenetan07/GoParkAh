import { Injectable } from '@angular/core';
import { Carpark } from './carpark.model';

@Injectable({
  providedIn: 'root'
})
export class CarparksService {
  private _allCarparks: Carpark[];

  private _favCarparks: Carpark[] = [
    new Carpark(
      'p1',
      '412 Woodlands St 41',
      '730412',
      'https://hybecorp.com/archive/YyQ6AuOnVuWtyBcnSPWW7UCNE7iZNNEDk9x8r01Eo0kOAWgMvS2hExwGhRFHZByiAtdJdOJS8NM4CjIXlkNHx016KMlDqmKfTJ8R8Tf7W8PuRxisViOGRFszt7ELmq9u.jpg',
      ),
  ]

  private _nearCarparks: Carpark[] = [
    new Carpark(
      'p2',
      '424B Yishun Ave 11',
      '762424',
      'https://cdn.shopify.com/s/files/1/0231/1294/1648/articles/Pokemon_Center1_700x.jpg?v=1630683901',
      ),

    new Carpark(
      'p3',
      '601 Ang Mo Kio Ave 5',
      '560601',
      'https://phantom-marca.unidadeditorial.es/405632f5ad74b20e7db78c1401cc4afa/crop/119x0/1848x1154/resize/660/f/webp/assets/multimedia/imagenes/2022/11/14/16684588334944.png',
      ),
  ]

  constructor() { }

  get favCarparks() {
    return [...this._favCarparks];
  }

  get nearCarparks() {
    return [...this._nearCarparks];
  }

  get allCarparks() {
    return this._allCarparks = [...this._favCarparks.concat(...this._nearCarparks)];
  }

  getCarpark(postal: string) {
    return {...this._allCarparks.find(p => p.postal === postal)};
  }
}
