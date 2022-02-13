import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FamilyType } from './entities/family.entity';
import { Family } from './interfaces/family.interface';
import { CreateFamilyInput } from './dto/create-family.input';

@Injectable()
export class FamilyService {

  constructor(@InjectModel('family') private readonly familyModel: Model<Family>) { }

  async create(createFamilyDto: CreateFamilyInput): Promise<FamilyType> {
    const createdFamily = new this.familyModel(createFamilyDto)
    return await createdFamily.save()
  }

  async findAll(): Promise<FamilyType[]> {
    return await this.familyModel.find().populate('service').exec()
  }

  findOne(id: number) {
    return `This action returns a #${id} family`;
  }

  remove(id: number) {
    return `This action removes a #${id} family`;
  }
}