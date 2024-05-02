/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable('chat_app', function (table) {
        table.increments('id');
        table.string('personName', 50).notNullable();
        table.string('personNumber', 50).notNullable();
        table.string('personEmail', 50).notNullable();
        table.timestamps(true, true);
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    // Drop the chat_app table if it exists
    return knex.schema.dropTableIfExists('chat_app');
};
