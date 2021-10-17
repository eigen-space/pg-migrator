import { MigrationConfig } from '@eigenspace/db-migrator';

export interface PgMigrationConfig extends MigrationConfig {
    ssl?: boolean;
    schema: string;
}