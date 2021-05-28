exports.up = function (knex) {
    return knex.schema.createTable('episodes', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('episode').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('episodes');
};
