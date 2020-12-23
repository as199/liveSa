import { Injectable } from '@angular/core';
import {Bien} from './list-bien/bien.model';

@Injectable({
  providedIn: 'root'
})
export class BienService {

  biens: Bien[] = [
    { id: 1, title: 'Home',
      description: 'This is content of Home', price: 456756,
      image: 'https://source.unsplash.com/1080x720/?home', category: 'Immobilier',
      state: 1, sale: true, createAt: new Date(2019, 5, 28)
    },
    { id: 2, title: 'Road',
      description: 'This is content of Road', price: 234534,
      image: 'https://source.unsplash.com/1080x720/?road', category: 'Immobilier',
      state: 1, sale: true, createAt: new Date(2019, 9, 21)
    },
    { id: 3, title: 'Dog',
      description: 'This is content of Dog', price: 547657,
      image: 'https://source.unsplash.com/1080x720/?dog', category: 'Immobilier',
      state: 1, sale: true, createAt: new Date(2019, 4, 17)
    },
    { id: 4, title: 'Music',
      description: 'This is content of Music', price: 587789,
      image: 'https://source.unsplash.com/1080x720/?dj', category: 'Music',
      state: 1, sale: true, createAt: new Date(2019, 12, 3)
    },
    { id: 5, title: 'Planete',
      description: 'This is content of Planet', price: 400000,
      image: 'https://source.unsplash.com/1080x720/?planet', category: 'Planet',
      state: 1, sale: true, createAt: new Date(2019, 1, 8)
    }, { id: 6, title: 'Car',
      description: 'This is content of Cat', price: 3424443,
      image: 'https://source.unsplash.com/1080x720/?lamborghini', category: 'Car',
      state: 1, sale: true, createAt: new Date(2020, 6, 5)
    }
  ];

  constructor() { }

  getAllBiens(): Bien[] {
    return this.biens;
  }

  /**
   * Permet de rechercher un bien par son ID
   * @param id
   * @return bien: Bien | null
   */
  getBienById(id: number): Bien{
    const bienFound = this.biens.find(
      (b: Bien) => {
        return b.id === id;
      }
    );
    return bienFound as Bien;
  }

  addBien(newBien: Bien) {
    this.biens.push(newBien);
  }

  updateBien(updatesBien: Bien) {
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
