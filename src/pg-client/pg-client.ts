import { DbClient, SqlQuery } from '@eigenspace/db-migrator';
import { PgMigrationConfig } from '../types/pg-migration-config';
import * as pg from 'pg';
import { QueryResult } from '@eigenspace/db-migrator';

export class PgClient extends DbClient<PgMigrationConfig> {
    private db: pg.Client;

    constructor(config: PgMigrationConfig) {
        super(config);

        if (this.config.ssl) {
            pg.defaults.ssl = true;
        }

        this.db = new pg.Client(this.config);
    }

    runQuery(query: SqlQuery): Promise<QueryResult> {
        return this.db.query(query);
    }

    async connect(): Promise<void> {
        await this.db.connect();

        const { schema } = this.config;
        // language=PostgreSQL
        await this.db.query(`
            create schema if not exists ${schema};
            set search_path = ${schema};
        `);
    }

    disconnect(): Promise<void> {
        return this.db.end();
    }

    protected getCreateChangelogTableQuery(): SqlQuery {
        const { changelogTable } = this.config;

        return `
            create table ${changelogTable} (
                version bigint primary key,
                name    text,
                md5     text,
                run_at  timestamp with time zone
            );
        `;
    }

    protected getDoesChangelogTableExistQuery(): SqlQuery {
        const { database, schema, changelogTable } = this.config;

        return `
            select column_name
            from information_schema.columns
            where table_catalog = '${database}'
              and table_schema = '${schema}'
              and table_name = '${changelogTable}';
        `;
    }
}