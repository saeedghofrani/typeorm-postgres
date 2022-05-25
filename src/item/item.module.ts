
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { item } from '../model/item.entity';

@Module({
    imports: [TypeOrmModule.forFeature([item])],
    providers: [ItemService],
    controllers: [ItemController],
    exports: []
})
export class ItemModule { }