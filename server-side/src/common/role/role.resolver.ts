import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RoleCreateInput } from './dto/create-role.input';
import { RoleType } from './entities/role.entity';
import { RoleService } from './role.service';
import { Role } from './schemas/role.schema';

@Resolver(of => RoleType)
export class RoleResolver {

    constructor(private readonly roleService: RoleService){ }

    @Query(returns => [RoleType])
    async roles(): Promise<RoleType[]> {
        return this.roleService.findAll()
    }

    @Query(returns => [RoleType])
    async findRoleByName(@Args('name') name: string): Promise<RoleType[]> {
        return this.roleService.findByName(name)
    }

    @Query(returns => RoleType, { name: 'role' })
    async findRoleById(@Args('id') id:string): Promise<RoleType> {
        return this.roleService.findById(id)
    }

    @Mutation(returns => RoleType)
    async createRole(@Args('input') input: RoleCreateInput): Promise<RoleType> {
        return this.roleService.create(input)
    }

    @Mutation(returns => RoleType)
    async updateRole(
        @Args('id') id: string,
        @Args('input') input:RoleCreateInput
    ) {
        return this.roleService.update(id, input as Role)
    }

    @Mutation(returns => RoleType)
    async deleteRole(@Args('id') id: string) {
        return this.roleService.delete(id)
    }

}