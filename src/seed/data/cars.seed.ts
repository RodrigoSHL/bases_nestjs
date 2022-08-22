import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';
export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'toyota',
    model: 'yaris',
  },
  {
    id: uuid(),
    brand: 'hyundai',
    model: 'grand i10',
  },
  {
    id: uuid(),
    brand: 'jeep',
    model: 'cherokee',
  },
];
