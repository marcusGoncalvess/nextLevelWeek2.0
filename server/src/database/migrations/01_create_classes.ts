import Knex from "knex";

// metodo up : quais alterações queremos fazer no banco de dados
export async function up(knex: Knex) {
  return knex.schema.createTable("classes", (table) => {
    table.increments("id").primary();
    table.string("subject").notNullable();
    table.decimal("cost").notNullable();

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      // se o professor for deltado da plataforma as aulas dele somem junto
      .onDelete('CASCADE')
      // se alterar o id na outra tabela ele reflete aqui automaticamente
      .onUpdate('CASCADE')
  });
}
// metodo down: Desfazer alterações se caso dê problema
export async function down(knex: Knex) {
  return knex.schema.dropTable("classes");
}
