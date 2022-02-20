import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoleCreateInput } from './dto/create-role.input';
import { RoleType } from './entities/role.entity';
import { Role } from './schemas/role.schema';

@Injectable()
export class RoleService {

    constructor(@InjectModel('role') private roleModel: Model<Role>) { }

    async create(createRoleDto: RoleCreateInput): Promise<RoleType> {
        const createRole = new this.roleModel(createRoleDto)
        return await createRole.save()
    }

    async findAll(): Promise<RoleType[]> {
        return await this.roleModel.find().exec()
    }

    async findById(id: string): Promise<RoleType> {
        return await this.roleModel.findById({ _id: id })
    }

    async findByName(name: string): Promise<RoleType[]> {
        return await this.roleModel.find({roleName: new RegExp(name, 'i') })
    }

    async delete(id: string): Promise<RoleType> {
        return await this.roleModel.findByIdAndRemove(id);
    }

    async update(id: string, role: Role): Promise<RoleType> {
        return await this.roleModel.findByIdAndUpdate(id, role, { new: true });
    }

}
