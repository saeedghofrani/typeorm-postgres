import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemDTO } from './item.dto';
import { ItemService } from './item.service';
import { User } from 

@Controller('item')
export class ItemController {
  constructor(private serv: ItemService) {}

  @Get()
  public async getAll(): Promise<ItemDTO[]> {
    return await this.serv.getAll();
  }

  @Post()
  public async post(
    @User() user: User,
    @Body() dto: ItemDTO,
  ): Promise<ItemDTO> {
    return this.serv.create(dto, user);
  }
}
