import { Injectable } from '@angular/core';
import {Bien} from './list-bien/bien.model';

@Injectable({
  providedIn: 'root'
})
export class BienService {

  biens: Bien[] = [
    { id: 1, title: 'Home',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusamus aliquid amet culpa deserunt dolore expedita explicabo, facilis illum optio quam quia, reiciendis repellat sequi ullam voluptas! A, obcaecati.Accusantium ad aliquam consequatur consequuntur corporis dignissimos dolor ea earum error facere fuga hic laboriosam laborum maiores mollitia nihil, odio odit omnis porro quasi, recusandae reprehenderit soluta sunt voluptatibus voluptatum!',
      price: 456756,
      image: 'https://source.unsplash.com/1080x720/?home', category: 'Immobilier',
      state: 1, sale: true, createAt: new Date(2019, 5, 28)
    },
    { id: 2, title: 'Road',
      description: 'TLorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusamus aliquid amet culpa deserunt dolore expedita explicabo, facilis illum optio quam quia, reiciendis repellat sequi ullam voluptas! A, obcaecati.Accusantium ad aliquam consequatur consequuntur corporis dignissimos dolor ea earum error facere fuga hic laboriosam laborum maiores mollitia nihil, odio odit omnis porro quasi, recusandae reprehenderit soluta sunt voluptatibus voluptatum!\'', price: 234534,
      image: 'https://source.unsplash.com/1080x720/?road', category: 'Immobilier',
      state: 1, sale: true, createAt: new Date(2019, 9, 21)
    },
    { id: 3, title: 'Dog',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusamus aliquid amet culpa deserunt dolore expedita explicabo, facilis illum optio quam quia, reiciendis repellat sequi ullam voluptas! A, obcaecati.Accusantium ad aliquam consequatur consequuntur corporis dignissimos dolor ea earum error facere fuga hic laboriosam laborum maiores mollitia nihil, odio odit omnis porro quasi, recusandae reprehenderit soluta sunt voluptatibus voluptatum!\'', price: 547657,
      image: 'https://source.unsplash.com/1080x720/?dog', category: 'Immobilier',
      state: 1, sale: true, createAt: new Date(2019, 4, 17)
    },
    { id: 4, title: 'Music',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusamus aliquid amet culpa deserunt dolore expedita explicabo, facilis illum optio quam quia, reiciendis repellat sequi ullam voluptas! A, obcaecati.Accusantium ad aliquam consequatur consequuntur corporis dignissimos dolor ea earum error facere fuga hic laboriosam laborum maiores mollitia nihil, odio odit omnis porro quasi, recusandae reprehenderit soluta sunt voluptatibus voluptatum!\'',
      price: 587789,
      image: 'https://source.unsplash.com/1080x720/?dj',
      category: 'Music',
      state: 1, sale: true,
      createAt: new Date(2019, 12, 3)
    },
    { id: 5, title: 'Planete',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusamus aliquid amet culpa deserunt dolore expedita explicabo, facilis illum optio quam quia, reiciendis repellat sequi ullam voluptas! A, obcaecati.Accusantium ad aliquam consequatur consequuntur corporis dignissimos dolor ea earum error facere fuga hic laboriosam laborum maiores mollitia nihil, odio odit omnis porro quasi, recusandae reprehenderit soluta sunt voluptatibus voluptatum!\'', price: 400000,
      image: 'https://source.unsplash.com/1080x720/?planet', category: 'Planet',
      state: 1, sale: true, createAt: new Date(2019, 1, 8)
    }, { id: 6, title: 'Car',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusamus aliquid amet culpa deserunt dolore expedita explicabo, facilis illum optio quam quia, reiciendis repellat sequi ullam voluptas! A, obcaecati.Accusantium ad aliquam consequatur consequuntur corporis dignissimos dolor ea earum error facere fuga hic laboriosam laborum maiores mollitia nihil, odio odit omnis porro quasi, recusandae reprehenderit soluta sunt voluptatibus voluptatum!\'', price: 3424443,
      image: 'https://source.unsplash.com/1080x720/?lamborghini', category: 'Car',
      state: 1, sale: true, createAt: new Date(2020, 6, 5)
    }
  ];

  constructor() { }

  getAllBiens(): Bien[] {
    return this.biens;
  }
  getBienById(id: number): Bien{
    const bienFound = this.biens.find(
      (b: Bien) => {
        return b.id === id;
      }
    );
    return bienFound as Bien;
  }

  addBien(bien: Bien): any {
    this.biens.push(bien);
  }

  updateBien(updatesBien: Bien): any {
    let oldBien = this.biens.find(
      (b: Bien) => {
        return b.id === updatesBien.id;
      }
    );
    if (oldBien) {
      // Pour chaque attribut qui est à gauche affecter un attribut qui est à droite
      oldBien = {...updatesBien};
    }
  }

  getLastId(): number {
    return this.biens[this.biens.length - 1] ? this.biens[this.biens.length - 1].id : 0;
  }

}
