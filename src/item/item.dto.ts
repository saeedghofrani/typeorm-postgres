import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, } from 'class-validator';
import { item } from '../model/item.entity';
import { User } from '../user.decorator';

export class ItemDTO implements Readonly<ItemDTO> {
    @ApiProperty({ required: true })
    @IsUUID()
    id: string;


    @ApiProperty({ required: true })
    @IsString()
    name: string;

    @ApiProperty({ required: true })
    @IsString()
    description: string;

    public static from(dto: Partial<ItemDTO>) {
        const it = new ItemDTO();
        it.id = dto.id;
        it.name = dto.name;
        it.description = dto.description;
        return it;
    }

    public static fromEntity(entity: item) {
        return this.from({
            id: entity.id,
            name: entity.name,
            description: entity.description
        });
    }

    public toEntity(user: User = null) {
        const it = new item();
        it.id = this.id;
        it.name = this.name;
        it.description = this.description;
        it.createDateTime = new Date();
        it.createdBy = user ? user.id : null;
        it.lastChangedBy = user ? user.id : null;
        return it;
    }
}