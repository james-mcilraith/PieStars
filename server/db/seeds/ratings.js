/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('userratings').del()
  await knex('userratings').insert([
    {id: 1, userid: 'rowValue1', flavor:'mince', rating:'', bakery:'', address:''}, 
    {id: 2, userid: 'rowValue2', flavor:'mince', rating:'', bakery:'', address:''},
    {id: 3, userid: 'rowValue3', flavor:'', rating:'', bakery:'', address:''}
  ]);
};
