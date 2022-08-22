import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/car-create.dto';
import { UpdateCarDto } from './dto/car-update.dto';

@Controller('cars')
export class CarsController {
  constructor(public carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }
  @Get(':id')
  getCarsById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findById(id);
  }
  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.update(updateCarDto, id);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
