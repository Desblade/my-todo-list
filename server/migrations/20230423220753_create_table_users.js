  /**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = (knex) => knex.schema.createTable('users', (table) => {
  table.increments('id');
  table.string('name').notNullable();
  table.string('surname').notNullable();
  table.string('fatherhood').nullable();
  table.string('login').notNullable().unique();
  table.string('password').notNullable();
  table.enu('roles', ['user', 'manager']).notNullable();
  table.integer('managerId').nullable();
  table.foreign('managerId').references('id').inTable('users');
});

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = (knex) => knex.schema.dropTable('users');
