import { Test, TestingModule } from '@nestjs/testing';
import { AdminsService } from './admin.service';

describe('AdminService', () => {
  let service: AdminsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminsService],
    }).compile();

    service = module.get<AdminsService>(AdminsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
