# Postgres Migrator

It is a concrete implementation of a migrator of SQL change sets
for a Postgres database. It is a simple version of migration like
the Liquibase does but only for NodeJs.

The abstract concept of the DB Migrator is stored in the separate
repository: [db-migrator](https://github.com/eigen-space/db-migrator).

# Why do we have that dependencies?

* `@eigenspace/db-migrator` - it is the base for this migrator.

# Why do we have that dev dependencies?

* `@eigenspace/codestyle` - includes lint rules, config for typescript.
* `@eigenspace/commit-linter` - linter for commit messages.
* `@eigenspace/package-publisher` - it publishes the package and set the next version
  automatically.
* `@types/*` - contains type definitions for specific library.
* `clean-webpack-plugin` - it is used to clean dist folder before build.
* `copy-webpack-plugin` - it is used to copy additional files into dist.
* `eslint` - it checks code for readability, maintainability, and functionality errors.
* `eslint-plugin-eigenspace-script` - includes set of script linting rules
  and configuration for them.
* `husky` - used for configure git hooks.
* `lint-staged` - used for configure linters against staged git files.
* `pg` - it is a driver and api for a postgres database to be able to connect 
  and query it. 
* `ts-loader` - webpack loader to build typescript files.
* `ts-node` - to run without build typescript.
* `typescript` - is a superset of JavaScript that have static type-checking and ECMAScript features.
* `webpack` - it is used to build the package/library.
* `webpack-cli` - it is used to send commands to webpack using commandline interface.