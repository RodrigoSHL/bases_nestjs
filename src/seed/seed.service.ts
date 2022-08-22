import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRAND_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {
  constructor(
    public carService: CarsService,
    public brandService: BrandsService,
  ) {}
  populateDB() {
    this.carService.fillCarsWithSeedData(CARS_SEED);
    this.brandService.fillBrandsWithSeedData(BRAND_SEED);
    return `SEED EXECUTED`;
  }
}
