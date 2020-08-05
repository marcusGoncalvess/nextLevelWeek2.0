import Knex from "knex";

// metodo up : quais alterações queremos fazer no banco de dados
export async function up(knex: Knex) {
  return knex.schema.createTable("connections", (table) => {
    table.increments("id").primary();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      // se o professor for deltado da plataforma as aulas dele somem junto
      .onDelete("CASCADE")
      // se alterar o id na outra tabela ele reflete aqui automaticamente
      .onUpdate("CASCADE");

    table.timestamp("created_at").defaultTo("now()").notNullable();
  });
}
// metodo down: Desfazer alterações se caso dê problema
export async function down(knex: Knex) {
  return knex.schema.dropTable("connections");
}
