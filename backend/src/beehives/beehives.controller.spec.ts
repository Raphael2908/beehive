import { Test, TestingModule } from '@nestjs/testing';
import { BeehivesController } from './beehives.controller';
import { BeehivesService } from './beehives.service';

describe('BeehivesController', () => {
  let controller: BeehivesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeehivesController],
      providers: [BeehivesService],
    }).compile();

    controller = module.get<BeehivesController>(BeehivesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
