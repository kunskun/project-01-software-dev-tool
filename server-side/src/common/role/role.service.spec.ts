import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { RoleService } from './role.service';

describe('RoleService', () => {
    let service: RoleService;

    const mockRoleService = {
        findAll: jest.fn().mockImplementation(() => Promise.resolve([
            {
                id: Date.now(),
                roleName: 'host'
            },{
                id: Date.now(),
                roleName: 'member'
            }
        ])),
        findById: jest.fn().mockImplementation((id) => 
            Promise.resolve({id: id, roleName: Date.now().toString()})
        ),
        findByName: jest.fn().mockImplementation((name) => 
            Promise.resolve({id: Date.now(), roleName: name})
        )
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [RoleService, {
                provide: getModelToken('role'),
                useValue: mockRoleService
            }]
        }).compile();

        service = module.get<RoleService>(RoleService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    // it('should get all role', async () => {
    //     expect((await service.findAll()).length).toEqual(2);
    // })

    it('should find role by id', async () => {
        expect(await service.findById('1')).toEqual({
            id: '1',
            roleName: expect.any(String)
        });

        expect(mockRoleService.findById).toHaveBeenCalled();
    })

    // it('should find role by name', async () => {
    //     expect(await service.findByName('host')).toEqual({
    //         id: expect.any(String),
    //         roleName: 'host'
    //     });

    //     expect(mockRoleService.findByName).toHaveBeenCalled();
    // })


})