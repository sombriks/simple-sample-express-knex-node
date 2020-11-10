exports.up = function (knex) {
  return knex.schema.createTable("visita", (tb) => {
    tb.increments("id");
    tb.timestamp("data").notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("visita");
};
