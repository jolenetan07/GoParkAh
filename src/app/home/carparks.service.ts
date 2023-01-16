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
      'https://www.mynicehome.gov.sg/wp-content/uploads/HDB-Carpark.png',
      'Limited Available',
      [
        new Fault(
          'f1',
          'Broken Barrier',
          'Broken barrier at exit 1',
          'https://mm.aiircdn.com/3/583c1b07a5644.jpg',
          new Date("1/15/2023, 9:08:23 PM").toLocaleString("en-US"),
          15,
          2,
          'Pending'
        ),
        new Fault(
          'f2',
          'Broken Door Handle',
          'Broken door handle at level 3',
          'https://www.superstarhandyman.com/uploads/9/9/9/7/99979756/door-handle-broken_orig.jpg',
          new Date("1/1/2023, 11:34:44 AM").toLocaleString("en-US"),
          13,
          3,
          'Pending'
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
      'https://motoristprod.s3.amazonaws.com/uploads/redactor_rails/picture/data/5733/HDB-parking-offences-and-peanlties-featured.jpeg',
      'Some Available',
      [
        new Fault(
          'f1',
          'Broken Lift',
          'Lift not working',
          'https://www.asiaone.com/sites/default/files/styles/article_main_image/public/moments/Jun2017/15_2.jpg?itok=x69co22k',
          new Date("1/2/2023, 5:45:28 PM").toLocaleString("en-US"),
          19,
          0,
          'Pending'
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
      'https://www.asiaone.com/sites/default/files/original_images/Jul2017/carparks_040717_st.jpg',
      'Many Available',
      [
        new Fault(
          'f1',
          'Broken Barrier',
          'Broken barrier at exit 1',
          'https://mm.aiircdn.com/3/583c1b07a5644.jpg',
          new Date("1/3/2023, 3:58:48 PM").toLocaleString("en-US"),
          15,
          2,
          'Pending'
        ),
        new Fault(
          'f2',
          'Broken Door Handle',
          'Broken door handle at level 3',
          'https://www.superstarhandyman.com/uploads/9/9/9/7/99979756/door-handle-broken_orig.jpg',
          new Date("1/5/2023, 9:37:28 AM").toLocaleString("en-US"),
          13,
          3,
          'Pending'
        ),
        new Fault(
          'f3',
          'Broken Lift',
          'Lift not working',
          'https://www.asiaone.com/sites/default/files/styles/article_main_image/public/moments/Jun2017/15_2.jpg?itok=x69co22k',
          new Date("1/9/2023, 10:07:23 PM").toLocaleString("en-US"),
          7,
          1,
          'Pending'
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
      'https://mm.aiircdn.com/3/583c1b07a5644.jpg',
      new Date().toLocaleString("en-US"),
      0,
      0,
      'Pending'
    );
    this._nearCarparks[0].faults.push(newFault);
  }

  updateCapacity(capacityStatus: number) {
    let newStatus: string;
    if (capacityStatus == 1) {
      newStatus = 'Limited Available'
    } else if (capacityStatus == 2) {
      newStatus = 'Some Available'
    } else {
      newStatus = 'Many Available'
    }
    this._nearCarparks[0].status = newStatus;
  }

}
