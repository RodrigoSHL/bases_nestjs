import { Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  arrayCars: Car[] = [
    {
      id: uuid(),
      model: 'Yaris',
      brand: 'Toyota',
    },
    {
      id: uuid(),
      model: 'A6',
      brand: 'Ferrari',
    },
    {
      id: uuid(),
      model: 'A200',
      brand: 'Mercedez',
    },
    {
      id: uuid(),
      model: 'Alto',
      brand: 'Susuki',
    },
  ];

  findAll() {
    return this.arrayCars;
  }

  findById(id: string) {
    return this.arrayCars.find((x) => x.id === id);
  }
}
