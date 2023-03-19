import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ManteMecanico} from '../models';
import {ManteMecanicoRepository} from '../repositories';

export class MantenimientoController {
  constructor(
    @repository(ManteMecanicoRepository)
    public manteMecanicoRepository : ManteMecanicoRepository,
  ) {}

  @post('/mante-mecanicos')
  @response(200, {
    description: 'ManteMecanico model instance',
    content: {'application/json': {schema: getModelSchemaRef(ManteMecanico)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ManteMecanico, {
            title: 'NewManteMecanico',
            
          }),
        },
      },
    })
    manteMecanico: ManteMecanico,
  ): Promise<ManteMecanico> {
    return this.manteMecanicoRepository.create(manteMecanico);
  }

  @get('/mante-mecanicos/count')
  @response(200, {
    description: 'ManteMecanico model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ManteMecanico) where?: Where<ManteMecanico>,
  ): Promise<Count> {
    return this.manteMecanicoRepository.count(where);
  }

  @get('/mante-mecanicos')
  @response(200, {
    description: 'Array of ManteMecanico model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ManteMecanico, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ManteMecanico) filter?: Filter<ManteMecanico>,
  ): Promise<ManteMecanico[]> {
    return this.manteMecanicoRepository.find(filter);
  }

  @patch('/mante-mecanicos')
  @response(200, {
    description: 'ManteMecanico PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ManteMecanico, {partial: true}),
        },
      },
    })
    manteMecanico: ManteMecanico,
    @param.where(ManteMecanico) where?: Where<ManteMecanico>,
  ): Promise<Count> {
    return this.manteMecanicoRepository.updateAll(manteMecanico, where);
  }

  @get('/mante-mecanicos/{id}')
  @response(200, {
    description: 'ManteMecanico model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ManteMecanico, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ManteMecanico, {exclude: 'where'}) filter?: FilterExcludingWhere<ManteMecanico>
  ): Promise<ManteMecanico> {
    return this.manteMecanicoRepository.findById(id, filter);
  }

  @patch('/mante-mecanicos/{id}')
  @response(204, {
    description: 'ManteMecanico PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ManteMecanico, {partial: true}),
        },
      },
    })
    manteMecanico: ManteMecanico,
  ): Promise<void> {
    await this.manteMecanicoRepository.updateById(id, manteMecanico);
  }

  @put('/mante-mecanicos/{id}')
  @response(204, {
    description: 'ManteMecanico PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() manteMecanico: ManteMecanico,
  ): Promise<void> {
    await this.manteMecanicoRepository.replaceById(id, manteMecanico);
  }

  @del('/mante-mecanicos/{id}')
  @response(204, {
    description: 'ManteMecanico DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.manteMecanicoRepository.deleteById(id);
  }
}
