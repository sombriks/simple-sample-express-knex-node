exports.up = function (knex) {
  return knex("visita").insert([{ data: "2020-10-27" }]);
};

exports.down = function (knex) {
  return knex("visita").del().where({ data: "2020-10-27" });
};
