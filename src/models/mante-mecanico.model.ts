import {Entity, model, property} from '@loopback/repository';

@model()
export class ManteMecanico extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  placa: string;

  @property({
    type: 'string',
    required: true,
  })
  modelo: string;

  @property({
    type: 'string',
  })
  propietario?: string;

  @property({
    type: 'string',
    required: true,
  })
  falla: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @property({
    type: 'string',
    required: true,
  })
  mantenimiento: string;


  constructor(data?: Partial<ManteMecanico>) {
    super(data);
  }
}

export interface ManteMecanicoRelations {
  // describe navigational properties here
}

export type ManteMecanicoWithRelations = ManteMecanico & ManteMecanicoRelations;
