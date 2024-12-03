/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export const seed = async function (knex) {
  await knex('userratings').delete()
  await knex('userratings').insert([
    {
      auth0_id: 'auth0|1234567890',
      pieId: 1,
      rating: 4,
    },
  ])
}

export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('userratings').del()
  await knex('userratings').insert([
    {id: 1, userid: 'rowValue1', flavor:'mince', rating:'', bakery:'', address:''}, 
    {id: 2, userid: 'rowValue2', flavor:'mince', rating:'', bakery:'', address:''},
    {id: 3, userid: 'rowValue3', flavor:'', rating:'', bakery:'', address:''}
  ]);
};
