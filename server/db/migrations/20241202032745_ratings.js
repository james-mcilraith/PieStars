/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('userratings', (table) => {
    table.increments('id').primary().notNullable()
    table.string('userid').notNullable()
    table.string('flavor', 50).notNullable()
    table.string('rating', 50).notNullable() // Award place (e.g., Gold, Silver)
    table.string('bakery', 100).notNullable() // Name of the bakery
    table.string('address', 255).notNullable() // Address of the bakery
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists('BakeryAwards')
}
