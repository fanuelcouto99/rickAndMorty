exports.up = function (knex) {
    return knex.schema.createTable('persona', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('status').notNullable();
        table.string('specie').notNullable();
        table.string('type')
        table.string('gender').notNullable();
        table.string('image').notNullable();
        table.string('location_id').notNullable();
        table.string('episodes_id').notNullable();

        table.foreign('location_id').references('id').inTable('location');
        table.foreign('episodes_id').references('id').inTable('episodes');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('persona');
};
