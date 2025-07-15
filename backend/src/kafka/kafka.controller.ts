import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaService } from './kafka.service';
import { CreateKafkaDto } from './dto/create-kafka.dto';
import { UpdateKafkaDto } from './dto/update-kafka.dto';

@Controller({ path: 'kafka' })
export class KafkaController {
  constructor(private readonly kafkaService: KafkaService) {}

  @Post()
  create(@Payload() createKafkaDto: CreateKafkaDto) {
    return this.kafkaService.create(createKafkaDto);
  }

  @Post('message')
  createMessage(@Body() createKafkaDto: CreateKafkaDto) {
    return this.kafkaService.createMessage(createKafkaDto);
  }

  @Post('consumer')
  createConsumer(@Body() createKafkaDto: CreateKafkaDto) {
    return this.kafkaService.createConsumer(createKafkaDto);
  }

  @Get()
  findAll() {
    return this.kafkaService.findAll();
  }

  @MessagePattern('findOneKafka')
  findOne(@Payload() id: number) {
    return this.kafkaService.findOne(id);
  }

  @MessagePattern('updateKafka')
  update(@Payload() updateKafkaDto: UpdateKafkaDto) {
    return this.kafkaService.update(updateKafkaDto.id, updateKafkaDto);
  }

  @MessagePattern('removeKafka')
  remove(@Payload() id: number) {
    return this.kafkaService.remove(id);
  }
}
