/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('BakeryAwards', (table) => {
    table.integer('id').primary().notNullable();
    table.string('Flavor', 50).notNullable(); // Flavor of the pie
    table.string('Place', 50).notNullable(); // Award place (e.g., Gold, Silver)
    table.string('Baker', 50).notNullable(); // Name of the baker
    table.string('Bakery', 100).notNullable(); // Name of the bakery
    table.string('Address', 255).notNullable(); // Address of the bakery
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists('BakeryAwards'); // Rollback: drop the `BakeryAwards` table
}



