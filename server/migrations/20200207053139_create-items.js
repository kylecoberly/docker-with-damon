exports.up = function(knex) {
  return knex.schema.createTable("item", table => {
    table.increments()
    table.string("label")
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("item")  
};
