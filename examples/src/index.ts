/* eslint-disable no-console */
import { PgMigrator } from '@eigenspace/pg-migrator';

const dbMigrator = new PgMigrator({
    host: 'localhost',
    port: 5432,
    database: 'playground',
    schema: 'public',
    user: 'postgres',
    password: 'pgP@sS!|0D',
    changelogTable: 'changelog',
    changeSetsDirectory: './db/changesets'
});

dbMigrator.migrate("0")
    .then(appliedMigrations => console.log(appliedMigrations))
    .catch(error => console.log(error));