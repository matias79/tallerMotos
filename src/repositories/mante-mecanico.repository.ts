import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {ManteMecanico, ManteMecanicoRelations} from '../models';

export class ManteMecanicoRepository extends DefaultCrudRepository<
  ManteMecanico,
  typeof ManteMecanico.prototype.id,
  ManteMecanicoRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(ManteMecanico, dataSource);
  }
}
