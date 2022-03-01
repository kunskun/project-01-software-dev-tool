import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundError } from 'rxjs';
import { RoleResolver } from './role.resolver';
import { RoleService } from './role.service';

describe('RoleResolver', () => {
  let resolver: RoleResolver;

  const mockRoleService = {
    roles: jest.fn(() => {
      return [
        {
          id: 1,
          roleName: 'host'
        },{
          id: 2,
          roleName: 'member'
        }
      ]
    }),
    findHost: jest.fn((name) => {
      return{
        id: 1,
        roleName: 'host'
      }
    }),
    findMember: jest.fn((name) => {
      return{
        id: 2,
        roleName: 'member'
      }
    }),
    tmpRole: jest.fn = () => {
      throw new Error('Role not found')
    }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleResolver],
    })
      .overrideProvider(RoleResolver)
      .useValue(mockRoleService)
      .compile();

    resolver = module.get<RoleResolver>(RoleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should get all role', async () => {
    expect(mockRoleService.roles().length).toBe(2)

    expect(mockRoleService.roles()).toContainEqual({
      id: expect.any(Number),
      roleName: 'host'
    })

    expect(mockRoleService.roles()).toContainEqual({
      id: expect.any(Number),
      roleName: 'member'
    })
  });

  it('should get only host by name', () => {
    expect(mockRoleService.findHost('host')).toEqual({
      id: expect.any(Number),
      roleName: 'host'
    })
  });

  it('should get only host by id', () => {
    expect(mockRoleService.findHost('1')).toEqual({
      id: 1,
      roleName: expect.any(String)
    })
  });

  it('should get only member by name', () => {
    expect(mockRoleService.findMember('member')).toEqual({
      id: expect.any(Number),
      roleName: 'member'
    })
  });

  it('should get only member by id', () => {
    expect(mockRoleService.findMember('2')).toEqual({
      id: 2,
      roleName: expect.any(String)
    })
  });

  it('should throw error', () => {
    expect(mockRoleService.tmpRole).toThrow()
  });

});
