import bcrypt from 'bcrypt';
import knex from '../../services/knex.js';

const TABLE = 'users';

export const getAll = () =>{
    return knex(TABLE)
    .select('id', 'name', 'email', 'created_at', 'updated_at'); // Metodo para retornar somente esses atributos
};

export const getOne = (id) =>{
    return knex(TABLE)
    .where({id})
    .select('id', 'name', 'email', 'created_at', 'updated_at')
    .first();
};

export const save = (params) =>{
    params.password = bcrypt.hashSync(params.password, 10);   // Criptografia do Password
    return knex(TABLE)
    .insert(params);
}

export const update = (id, params) =>{
    return knex(TABLE)
    .where({id})
    .update(params);
}

export const remove = ( ) =>{
    return knex(TABLE)
    .del();
}

export const getByEmail = (email) => {
  return knex(TABLE).where({ email }).first();
};



