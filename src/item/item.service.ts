import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { item } from 'src/model/item.entity';
import { Repository } from 'typeorm';
import { ItemDTO } from './item.dto';

@Injectable()
export class ItemService {

    constructor(@InjectRepository(item) private readonly repo: Repository<item>) { }

    public async getAll(): Promise<ItemDTO[]> {
        return await this.repo.find()
            .then(items => items.map(e => ItemDTO.fromEntity(e)));
    }

    public async create(dto: ItemDTO, user: User): Promise<ItemDTO> {
        return this.repo.save(dto.toEntity(user))
            .then(e => ItemDTO.fromEntity(e));
    }
}