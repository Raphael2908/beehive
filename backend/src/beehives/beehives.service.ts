import { Injectable } from '@nestjs/common';
import { CreateBeehiveDto } from './dto/create-beehive.dto';
import { UpdateBeehiveDto } from './dto/update-beehive.dto';

@Injectable()
export class BeehivesService {
  create(createBeehiveDto: CreateBeehiveDto) {
    return 'This action adds a new beehive';
  }

  findAll() {
    return `This action returns all beehives`;
  }

  findOne(id: number) {
    return `This action returns a #${id} beehive`;
  }

  update(id: number, updateBeehiveDto: UpdateBeehiveDto) {
    return `This action updates a #${id} beehive`;
  }

  remove(id: number) {
    return `This action removes a #${id} beehive`;
  }
}
