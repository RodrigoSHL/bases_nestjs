import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { v4 as uuid } from 'uuid';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  arrayBrand: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().getTime(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
    };
    this.arrayBrand.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.arrayBrand;
  }

  findOne(id: string) {
    const brand = this.arrayBrand.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException();
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    this.arrayBrand = this.arrayBrand.map((brand) => {
      if (brand.id === id) {
        (brand.updatedAt = new Date().getTime()),
          (brandDB = { ...brandDB, ...updateBrandDto });
        return brandDB;
      }
      return brandDB;
    });
    return brandDB;
  }

  remove(id: string) {
    this.arrayBrand = this.arrayBrand.filter((brand) => brand.id !== id);
  }
}
