import { Test, TestingModule } from '@nestjs/testing';
import { BeehivesService } from './beehives.service';

describe('BeehivesService', () => {
  let service: BeehivesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeehivesService],
    }).compile();

    service = module.get<BeehivesService>(BeehivesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
