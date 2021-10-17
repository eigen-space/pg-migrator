import { PgClient } from './pg-client/pg-client';
import { PgMigrationConfig } from './types/pg-migration-config';
import { DbMigrator } from '@eigenspace/db-migrator';

export class PgMigrator extends DbMigrator<PgMigrationConfig, PgClient> {

    constructor(config: PgMigrationConfig) {
        super(config, new PgClient(config));
    }
}