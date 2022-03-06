// import { Test } from '@nestjs/testing';
// import { getModelToken } from '@nestjs/mongoose';
// import { RoleService } from './role.service';
// import { RoleResolver } from './role.resolver';
// import { RoleModule } from './role.module';
// import { NotFoundException } from '@nestjs/common';

// describe('fineAll', () => {
//     let roleResolver: RoleResolver
//     let roleService: RoleService

//     // it('get all role success', async () => {
//     //     roleModel.find.mockResolvedValue([{
//     //         roleName: "host"
//     //     },{
//     //         roleName: "member"
//     //     }
//     // ])

//     // let result = await roleService.findAll()

//     // expect(result).toEqual([{
//     //     roleName: "host"
//     // },{
//     //     roleName: "member"
//     // }])
//     // })

//     // it('get all role fail', async () => {
//     //     let x = roleModel.find.mockRejectedValue()
//     //     console.log(typeof(x));

//     //     await expect(roleService.findAll()).rejects.toThrow(NotFoundException)
//     // })

//     const mockRepository = {
//         fineAll() {
//             return {}
//         }
//     }

//     beforeEach(async () => {
//         const module = await Test.createTestingModule({
//             controllers: [RoleResolver],
//             imports: [RoleModule]
//         })
//         .overrideProvider(getModelToken('fineall'))
//         .useValue(mockRepository)
//         .compile();

//         roleService = module.get<RoleService>(RoleService);
//     })

// })

// // describe('Role Resolver', () => {
// //     let roleResolver: RoleResolver
// //     let roleService: RoleService
    
// //     beforeEach(() => {
// //         roleService = new RoleService()
// //         roleResolver = new RoleResolver(roleService)
// //     })

// //     describe('fineall', () => {
// //         it('should return array of roles', async () => {
// //             const result = ['tes']
// //             jest.spyOn(roleService, 'fineAll').mockImplementation(() => result)

// //             expect(await roleResolver.roles()).toBe(result)
// //         })
// //     })
// // })