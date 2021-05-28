exports.up = function (knex) {
    return knex.schema.createTable('location', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('type').notNullable();
        table.string('dimension').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('location');
};
