import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'sqlserverdb',
  connector: 'mssql',
  url: '',
  host: 'localhost',
  port: 1433,
  user: 'sa',
  password: 'f11 2 f ',
  database: 'tallerDB'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class SqlserverdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'sqlserverdb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.sqlserverdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
