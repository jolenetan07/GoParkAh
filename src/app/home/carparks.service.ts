import { Injectable } from '@angular/core';
import { Block } from './block.model';
import { Carpark } from './carpark.model';
import { Fault } from './fault.model';

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
      'Limited Available',
      [
        new Fault(
          'f1',
          'Broken Barrier',
          'Broken barrier at exit 1',
          'https://images.squarespace-cdn.com/content/v1/586d154f03596e5605562ea7/ddd63294-6ba1-40b2-9e4e-27f790a028f4/bts.jpeg?format=1000w',
          new Date("1/15/2023, 9:08:23 PM").toLocaleString("en-US"),
          15,
          2,
          'To Be Reviewed'
        ),
        new Fault(
          'f2',
          'Broken Door Handle',
          'Broken door handle at level 3',
          'https://www.allkpop.com/upload/2020/08/content/010845/1596285934-jungkook.jpeg',
          new Date("1/1/2023, 11:34:44 AM").toLocaleString("en-US"),
          13,
          3,
          'To Be Reviewed'
        )
      ],
      [
        new Block(
          'b1',
          '730412',
          0
        ),
        new Block(
          'b2',
          '730411',
          80
        ),
        new Block(
          'b3',
          '730412',
          110
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
      'Some Available',
      [
        new Fault(
          'f1',
          'Broken Lift',
          'Lift not working',
          'https://images.news18.com/ibnlive/uploads/2021/12/269704667_455706142620278_9010913424206670183_n.jpg?impolicy=website&width=0&height=0',
          new Date("1/2/2023, 5:45:28 PM").toLocaleString("en-US"),
          7,
          1,
          'To Be Reviewed'
        )
      ],
      [
        new Block(
          'b1',
          '762424',
          0
        ),
        new Block(
          'b2',
          '762423',
          130
        ),
        new Block(
          'b1',
          '762425',
          180
        )
      ]
      ),

    new Carpark(
      'p3',
      '601 Ang Mo Kio Ave 5',
      '560601',
      'https://phantom-marca.unidadeditorial.es/405632f5ad74b20e7db78c1401cc4afa/crop/119x0/1848x1154/resize/660/f/webp/assets/multimedia/imagenes/2022/11/14/16684588334944.png',
      'Many Available',
      [
        new Fault(
          'f1',
          'Broken Barrier',
          'Broken barrier at exit 1',
          'https://images.squarespace-cdn.com/content/v1/586d154f03596e5605562ea7/ddd63294-6ba1-40b2-9e4e-27f790a028f4/bts.jpeg?format=1000w',
          new Date("1/3/2023, 3:58:48 PM").toLocaleString("en-US"),
          15,
          2,
          'To Be Reviewed'
        ),
        new Fault(
          'f2',
          'Broken Door Handle',
          'Broken door handle at level 3',
          'https://www.allkpop.com/upload/2020/08/content/010845/1596285934-jungkook.jpeg',
          new Date("1/5/2023, 9:37:28 AM").toLocaleString("en-US"),
          13,
          3,
          'To Be Reviewed'
        ),
        new Fault(
          'f3',
          'Broken Lift',
          'Lift not working',
          'https://images.news18.com/ibnlive/uploads/2021/12/269704667_455706142620278_9010913424206670183_n.jpg?impolicy=website&width=0&height=0',
          new Date("1/9/2023, 10:07:23 PM").toLocaleString("en-US"),
          7,
          1,
          'To Be Reviewed'
        )
      ],
      [
        new Block(
          'b1',
          '560601',
          0
        ),
        new Block(
          'b2',
          '560602',
          210
        ),
        new Block(
          'b3',
          '560603',
          270
        )
      ]
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

  addFault(
    title: string,
    description: string,
  ) {
    const newFault = new Fault(
      Math.random().toString(),
      title,
      description,
      'https://www.pinkvilla.com/files/jungkook_candid.jpg',
      new Date().toLocaleString("en-US"),
      5,
      2,
      'To Be Reviewed'
    );
    this._nearCarparks[0].faults.push(newFault);
  }



}
