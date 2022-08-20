import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/car-create.dto';
import { UpdateCarDto } from './dto/car-update.dto';

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
    const car = this.arrayCars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      model: createCarDto.model,
      brand: createCarDto.brand,
    };
    this.arrayCars.push(newCar);
    return newCar;
  }

  update(updateCarDto: UpdateCarDto, id: string) {
    const updateCar = this.findById(id);
    if (updateCar) {
      updateCar.brand = updateCarDto.brand;
      updateCar.model = updateCarDto.model;
    } else {
      throw new NotFoundException();
    }
    return updateCar;
  }
  delete(id: string) {
    const cars = this.findById(id);
    this.arrayCars = this.arrayCars.filter((car) => car.id !== id);
  }
}
