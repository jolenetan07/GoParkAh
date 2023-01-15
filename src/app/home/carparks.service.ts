import { Injectable } from '@angular/core';
import { Carpark } from './carpark.model';
import { Fault } from './fault.model';

@Injectable({
  providedIn: 'root'
})
export class CarparksService {
  private _allCarparks: Carpark[];
  /*
        public id: string,
      public title: string,
      public description: string,
      public imageUrls: string[],
      public timestamp: Date,
      public upVotes?: number,
      public downVotes?: number,
      public status?: string,
  */

  private _favCarparks: Carpark[] = [
    new Carpark(
      'p1',
      '412 Woodlands St 41',
      '730412',
      'https://hybecorp.com/archive/YyQ6AuOnVuWtyBcnSPWW7UCNE7iZNNEDk9x8r01Eo0kOAWgMvS2hExwGhRFHZByiAtdJdOJS8NM4CjIXlkNHx016KMlDqmKfTJ8R8Tf7W8PuRxisViOGRFszt7ELmq9u.jpg',
      90,
      [
        new Fault(
          'f1',
          'Broken Barrier',
          'Broken barrier at exit 1',
          'https://images.squarespace-cdn.com/content/v1/586d154f03596e5605562ea7/ddd63294-6ba1-40b2-9e4e-27f790a028f4/bts.jpeg?format=1000w',
          new Date().toLocaleString("en-US"),
          15,
          2,
          'To Be Reviewed'
        ),
        new Fault(
          'f2',
          'Broken Door Handle',
          'Broken door handle at level 3',
          'https://www.allkpop.com/upload/2020/08/content/010845/1596285934-jungkook.jpeg',
          new Date().toLocaleString("en-US"),
          13,
          3,
          'To Be Reviewed'
        )
      ]
      ),
  ]

  private _nearCarparks: Carpark[] = [
    new Carpark(
      'p2',
      '424B Yishun Ave 11',
      '762424',
      'https://cdn.shopify.com/s/files/1/0231/1294/1648/articles/Pokemon_Center1_700x.jpg?v=1630683901',
      50
      ),

    new Carpark(
      'p3',
      '601 Ang Mo Kio Ave 5',
      '560601',
      'https://phantom-marca.unidadeditorial.es/405632f5ad74b20e7db78c1401cc4afa/crop/119x0/1848x1154/resize/660/f/webp/assets/multimedia/imagenes/2022/11/14/16684588334944.png',
      10
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
