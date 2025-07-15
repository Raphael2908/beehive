import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  UseFilters,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BeehivesService } from './beehives.service';
import { CreateBeehiveDto } from './dto/create-beehive.dto';
import { UpdateBeehiveDto } from './dto/update-beehive.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller({ path: 'beehives' })
@UseGuards(AuthGuard)
export class BeehivesController {
  constructor(private readonly beehivesService: BeehivesService) {}

  @Post()
  create(@Body() createBeehiveDto: CreateBeehiveDto) {
    return this.beehivesService.create(createBeehiveDto);
  }

  @Get()
  findAll() {
    return this.beehivesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.beehivesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBeehiveDto: UpdateBeehiveDto) {
    return this.beehivesService.update(+id, updateBeehiveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beehivesService.remove(+id);
  }
}
