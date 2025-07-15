import { Injectable } from '@nestjs/common';
import { CreateKafkaDto } from './dto/create-kafka.dto';
import { UpdateKafkaDto } from './dto/update-kafka.dto';
import * as kafka from 'node-rdkafka';

@Injectable()
export class KafkaService {
  private producers: kafka.Producer[] = [];
  
  create(createKafkaDto: CreateKafkaDto) {
    const producer = new kafka.Producer({
      'metadata.broker.list': 'localhost:9092',
    }); 
    this.producers.push(producer);
    producer.connect();
    producer.on('ready', () => {
      console.log('Producer is ready');
    });
    producer.setPollInterval(100);
  }

  createMessage(createKafkaDto: CreateKafkaDto) {
    const producer = this.producers[0];
    producer.produce('test', null, Buffer.from(Buffer.from('Awesome message')));
    console.log('Message sent');
  }

  findAll() {
    return `This action returns all kafka`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kafka`;
  }

  update(id: number, updateKafkaDto: UpdateKafkaDto) {
    return `This action updates a #${id} kafka`;
  }

  remove(id: number) {
    return `This action removes a #${id} kafka`;
  }

  createConsumer(createKafkaDto: CreateKafkaDto) {
    const consumer = new kafka.KafkaConsumer({
      'group.id': 'kafka',
      'metadata.broker.list': 'localhost:9092',
    },{});
    consumer.connect();

consumer
  .on('ready', () => {
    consumer.subscribe(['test']);

    // Consume from the librdtesting-01 topic. This is what determines
    // the mode we are running in. By not specifying a callback (or specifying
    // only a callback) we get messages as soon as they are available.
    consumer.consume();
  })
  .on('data', (data) => {
    // Output the actual message contents
    console.log(data?.value?.toString());
  });
  }
}
