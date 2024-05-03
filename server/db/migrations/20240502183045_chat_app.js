/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {

  // Conversation Users' Table

  return knex.schema.createTable('users', function (table) {
      table.increments('id');
      table.string('username', 100);
      table.string('user_number', 100);
      table.timestamps(true, true);

    })
    //Conversation Configuration Table

    .createTable('convo_participants', function (table) {
      table.increments('id');
      table.string('convo_code', 100);
      table.string('message_sender', 255);
      table.string('message_recipient', 255);
      table.timestamps(true, true);
    })

    //Conversation Box Table

    .createTable('convo_box', function (table) {
      table.increments('id');
      table.string('convo_code', 100);
      table.timestamps(true, true);
    })

    // Conversation Messages' Table

    .createTable('convo_messages', function (table) {
      table.increments('id');
      table.string('convo_code', 100);
      table.string('user_id', 100);
      table.string('message', 255);
      table.timestamps(true, true);
      table.timestamp('time').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

  // Drop tables if they exist

  return knex.schema.dropTableIfExists('users')
    .dropTableIfExists('convo_participants')
    .dropTableIfExists('convo_box')
    .dropTableIfExists('convo_messages');
};
