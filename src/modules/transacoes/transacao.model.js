import knex from '../../services/knex.js';

const TABLE = 'transacoes';

export const getAll = (userId) => {
  return knex(TABLE)
    .select('*').where({ user_id: userId }); // Metodo para retornar somente esses atributos
};

export const getOne = (id, userId) => {
  return knex(TABLE)
    .where({ id })
    .andWhere({ 'user_id': userId })
    .select('*')
    .first();
};

export const save = (params) => {
  return knex(TABLE).insert(params);
}

export const update = (id, params, userId) => {
  return knex(TABLE)
    .where({ id }).andWhere({ user_id: userId }).update(params);
}

export const remove = (id, userId) => {
  return knex(TABLE).del().where({id}).andWhere({ user_id: userId })
}



