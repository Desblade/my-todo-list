/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = (knex) => knex.schema.createTable('todos', (table) => {
  table.increments('id');
  table.string('title').notNullable();
  table.string('description').notNullable();
  table.date('endtime').notNullable();
  table.timestamp('updatedAt').defaultTo(knex.fn.now());
  table.timestamp('createdAt').defaultTo(knex.fn.now());
  table.enu('priority', ['Высокий', 'Средний', 'Низкий']).notNullable();
  table.enu('status', ['К выполнению', 'Выполняется', 'Выполнена', 'Отменена']).notNullable();
  table.integer('responsibleId').nullable();
  table.integer('creatorId');
  table.foreign('creatorId').references('id').inTable('users');
  table.foreign('responsibleId').references('id').inTable('users');
});

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = (knex) => knex.schema.dropTable('todos');
