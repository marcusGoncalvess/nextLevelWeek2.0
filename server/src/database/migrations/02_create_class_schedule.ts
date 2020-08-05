import Knex from "knex";

// metodo up : quais alterações queremos fazer no banco de dados
export async function up(knex: Knex) {
  return knex.schema.createTable("class_schedule", (table) => {
    table.increments("id").primary();
    table.integer("week_day").notNullable();
    table.integer("from").notNullable();
    table.integer("to").notNullable();

    table.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      // se o professor for deltado da plataforma as aulas dele somem junto
      .onDelete('CASCADE')
      // se alterar o id na outra tabela ele reflete aqui automaticamente
      .onUpdate('CASCADE')
  });
}
// metodo down: Desfazer alterações se caso dê problema
export async function down(knex: Knex) {
  return knex.schema.dropTable("class_schedule");
}
