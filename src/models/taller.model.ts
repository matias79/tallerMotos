import {Entity, model, property} from '@loopback/repository';

@model()
export class Taller extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nombrelocal: string;

  @property({
    type: 'string',
    required: true,
  })
  propietario: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;


  constructor(data?: Partial<Taller>) {
    super(data);
  }
}

export interface TallerRelations {
  // describe navigational properties here
}

export type TallerWithRelations = Taller & TallerRelations;
