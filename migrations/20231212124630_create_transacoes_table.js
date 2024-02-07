/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return knex.schema.createTable('transacoes', (table) => {
        table.bigIncrements('id');
        table.string('descricao');
        table.integer('valor');
        table.date('data');
        table.string('tipo');
        table.bigint('categoria_id').unsigned().references('id').inTable('categorias'); //fk
        table.bigint('user_id').unsigned().references('id').inTable('users'); //fk
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
    return knex.schema.dropTable('transacoes');
};

