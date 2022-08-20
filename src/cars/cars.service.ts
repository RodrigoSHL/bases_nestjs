import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  arrayCars = [
    {
      id: 1,
      brand: 'Toyota',
    },
    {
      id: 2,
      brand: 'Ferrari',
    },
    {
      id: 3,
      brand: 'Mercedez',
    },
  ];

  findAll() {
    return this.arrayCars;
  }

  findById(id: number) {
    return this.arrayCars.find((x) => x.id === id);
  }
}
