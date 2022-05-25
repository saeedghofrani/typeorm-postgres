import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    // const insertQueryBuilder : connection.getRepository(User)
    //     .createQueryBuilder()
    //     .insert({
    //         name: 'John Smith'
    //     })
    //     .returning(['id']);

    // const users = await connection.getRepository(User)
    //     .createQueryBuilder('user')
    //     .addCommonTableExpression(insertQueryBuilder, 'insert_results')
    //     .where(`user.id IN (SELECT "id" FROM 'insert_results')`)
}
