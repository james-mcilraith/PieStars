/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex('User').delete()
  await knex('User').insert([
    {
      auth0_id: 'auth0|1234567890', // Example Auth0 ID (this will be unique for every user)
      rating: 4, // Rating out of 5
      favourite_pie: 'Apple Pie', // Favourite pie name
    },
  ])
}
