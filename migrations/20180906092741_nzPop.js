
exports.up = function(knex, Promise) {
  return knex.schema.createTable('nzPop', function (table) {
    table.increments('id').primary()
    table.string('ethnicity')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('nzPop')
};
