/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex('bakeryAwards').delete()
  await knex('bakeryAwards').insert([
    // Bacon & Egg
    {
      flavor: 'Bacon & Egg',
      place: 'Gold Award',
      baker: 'Mr Cheth Bun',
      bakery: 'Eurobake Espresso Ltd',
      address: '45 Main Road, Kumeū 0810, New Zealand',
    },
    {
      flavor: 'Bacon & Egg',
      place: 'Silver Award',
      baker: 'Mrs Theara Keo',
      bakery: 'Taste Bakery and Roast',
      address: '226-250 Lincoln Road, Henderson, Auckland 0610, New Zealand',
    },
    {
      flavor: 'Bacon & Egg',
      place: 'Bronze Award',
      baker: 'Mr Seila Ly',
      bakery: 'Hillcrest Bakery & Cafe',
      address: '145 Cambridge Road, Hillcrest, Hamilton 3216, New Zealand',
    },
    {
      flavor: 'Bacon & Egg',
      place: 'Highly Commended',
      baker: 'Mr Tola Chhunleng',
      bakery: 'Freemans Bakery and Cafe',
      address: '2/444 Glenfield Road, Glenfield, Auckland, New Zealand',
    },
    {
      flavor: 'Bacon & Egg',
      place: '5th',
      baker: 'Mr Sean Vo',
      bakery: 'Levain Artisan bakery',
      address: '224 White Swan Road, Mount Roskill, Auckland 1041, New Zealand',
    },
    {
      flavor: 'Bacon & Egg',
      place: '6th',
      baker: 'Mr Patrick Lam',
      bakery: 'Patricks Pie Group Limited',
      address: '2 Taurikura Drive, Tauriko, Tauranga 3110, New Zealand',
    },
    {
      flavor: 'Bacon & Egg',
      place: '7th',
      baker: 'Mr Tongmin Li',
      bakery: 'Hillpark Bakery Manurewa',
      address: '75 Grande Vue Road, Hillpark, Auckland 2102, New Zealand',
    },
    {
      flavor: 'Bacon & Egg',
      place: '8th',
      baker: 'Mrs Tina Yi',
      bakery: 'Mairangi Bay Bakery',
      address: '366D Beach Road, Mairangi Bay, Auckland 0630, New Zealand',
    },
    {
      flavor: 'Bacon & Egg',
      place: '9th',
      baker: 'Mrs Sopheap Long',
      bakery: 'Euro Patisserie Torbay',
      address: '1028 Beach Road, Torbay, Auckland 0630, New Zealand',
    },
    {
      flavor: 'Bacon & Egg',
      place: '10th',
      baker: 'Mr Sok Heang Nguon',
      bakery: 'Taste Cafe and Bakery',
      address: '1A Crayford Street West, Avondale, Auckland 1026, New Zealand',
    },

    // Mince & Gravy
    {
      flavor: 'Mince & Gravy',
      place: 'Gold Award',
      baker: 'Ms Arlyn Thompson',
      bakery: 'Rangiora Bakery',
      address: '18 High Street, Rangiora 7400, New Zealand',
    },
    {
      flavor: 'Mince & Gravy',
      place: 'Silver Award',
      baker: 'Mr Soem Top',
      bakery: 'Dinsdale Bakery',
      address: '18 Whatawhata Road, Dinsdale, Hamilton 3204, New Zealand',
    },
    {
      flavor: 'Mince & Gravy',
      place: 'Bronze Award',
      baker: 'Mrs Tina Yi',
      bakery: 'Mairangi Bay bakery',
      address: '366D Beach Road, Mairangi Bay, Auckland 0630, New Zealand',
    },
    {
      flavor: 'Mince & Gravy',
      place: 'Highly Commended',
      baker: 'Mr Jason Hay',
      bakery: 'Richoux Patisserie Ellerslie',
      address: '119 Main Highway, Ellerslie, Auckland 1051, New Zealand',
    },
    {
      flavor: 'Mince & Gravy',
      place: '5th',
      baker: 'Mr Kaing Sok',
      bakery: 'My Bakery Cafe',
      address: '6/4055 Great North Road, Glen Eden, Auckland, New Zealand',
    },
    {
      flavor: 'Mince & Gravy',
      place: '6th',
      baker: 'Mr Cheth Bun',
      bakery: 'Eurobake Espresso Ltd',
      address: '45 Main Road, Kumeū 0810, New Zealand',
    },
    {
      flavor: 'Mince & Gravy',
      place: '7th',
      baker: 'Mrs Vicheka Se',
      bakery: 'Green Bay bakery',
      address: '58A Godley Road, Green Bay, Auckland 0604, New Zealand',
    },
    {
      flavor: 'Mince & Gravy',
      place: '8th',
      baker: 'Mrs Theara Keo',
      bakery: 'Taste Bakery and Roast',
      address: '226-250 Lincoln Road, Henderson, Auckland 0610, New Zealand',
    },
    {
      flavor: 'Mince & Gravy',
      place: '9th',
      baker: 'Mr Jason Danielson',
      bakery: 'Kaipai Bakery',
      address: '27 Frederick Street, Wānaka 9305, New Zealand',
    },
    {
      flavor: 'Mince & Gravy',
      place: '10th',
      baker: 'Mrs Sopheap Long',
      bakery: 'Euro Patisserie Torbay',
      address: '1028 Beach Road, Torbay, Auckland 0630, New Zealand',
    },

    //Mince & Cheese
    {
      flavor: 'Mince & Cheese',
      place: 'Gold Award',
      baker: 'Mrs Theara Keo',
      bakery: 'Taste Bakery and Roast',
      address: '226-250 Lincoln Road, Henderson, Auckland 0610, New Zealand',
    },
    {
      flavor: 'Mince & Cheese',
      place: 'Silver Award',
      baker: 'Mr Kaing Sok',
      bakery: 'My Bakery Cafe',
      address: '6/4055 Great North Road, Glen Eden, Auckland, New Zealand',
    },
    {
      flavor: 'Mince & Cheese',
      place: 'Bronze Award',
      baker: 'Mrs Sopheap Long',
      bakery: 'Euro Patisserie Torbay',
      address: '1028 Beach Road, Torbay, Auckland 0630, New Zealand',
    },
    {
      flavor: 'Mince & Cheese',
      place: 'Highly Commended',
      baker: 'Mr Jason Hay',
      bakery: 'Richoux Patisserie Ellerslie',
      address: '119 Main Highway, Ellerslie, Auckland 1051, New Zealand',
    },
    {
      flavor: 'Mince & Cheese',
      place: '5th',
      baker: 'Mr Jason Danielson',
      bakery: 'Kaipai Bakery',
      address: '27 Frederick Street, Wānaka 9305, New Zealand',
    },
    {
      flavor: 'Mince & Cheese',
      place: '6th',
      baker: 'Mr Mab Chheur',
      bakery: 'Angkor Wat Kiwi Bakery and Cafe',
      address: '110 Dickens Street, Napier South, Napier 4110, New Zealand',
    },
    {
      flavor: 'Mince & Cheese',
      place: '7th',
      baker: 'Mr Chamnan Ly',
      bakery: 'Piefee',
      address: '349 Karangahape Road, Auckland CBD, Auckland 1010, New Zealand',
    },
    {
      flavor: 'Mince & Cheese',
      place: '8th',
      baker: 'Mr Sheng Pheng Rong',
      bakery: 'Panorama Bakery and Cafe',
      address: '44 Panorama Road, Mount Wellington, Auckland 1060, New Zealand',
    },
    {
      flavor: 'Mince & Cheese',
      place: '9th',
      baker: 'Mr Seila Ly',
      bakery: 'Hillcrest Bakery & Cafe',
      address: '145 Cambridge Road, Hillcrest, Hamilton 3216, New Zealand',
    },
    {
      flavor: 'Mince & Cheese',
      place: '10th',
      baker: 'Mr Kim Sroeun',
      bakery: 'Quality Inn bakery',
      address: '34 Arawa Street, Matamata 3400, New Zealand',
    },
  ])
}
