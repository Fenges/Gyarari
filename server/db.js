// Import path module
const path = require('path');

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/database.sqlite');

// Create connection to SQLite database
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: dbPath
    },
    useNullAsDefault: true
});

// Create a table in the database called "photos"
knex.schema
    // Make sure no table exists
    .hasTable('photos')
        .then((exists) => {
            if (!exists) {
                return knex.schema.createTable('photos', (table)  => {
                    table.increments('id').primary()
                    table.string('src')
                    table.string('src_hr')
                    table.string('name')
                    table.string('description')
                    table.integer('width')
                    table.integer('height')
                    table.integer('flags')
                })
                .then(() => {
                    // Log success message
                    console.log('Table \'Photos\' created.')
                })
                .catch((error) => {
                    console.error(`There was an error creating table: ${error}.`)
                })
            }
        })
        .then(() => {
            // Log success message
            console.log('done')
        })
        .catch((error) => {
            console.error(`There was an error setting up the database: ${error}`)
        });

// Log all data in table
knex.select('*').from('photos')
    .then(data => console.log('data:', data))
.catch(err => console.log(err));

// Export the database
module.exports = knex;
