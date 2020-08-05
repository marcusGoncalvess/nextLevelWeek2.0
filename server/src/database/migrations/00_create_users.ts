import Knex from "knex";

// metodo up : quais alterações queremos fazer no banco de dados
export async function up(knex: Knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("avatar").notNullable();
    table.string("whatsapp").notNullable();
    table.string("bio").notNullable();
  });
}
// metodo down: Desfazer alterações se caso dê problema
export async function down(knex: Knex) {
  return knex.schema.dropTable("users");
}
