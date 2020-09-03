// Import database
const knex = require('./../db');

// Retrieve all photos
exports.listPhotos = async (req, res) => {
    knex
        .select('*')
        .from('photos')
        .then(userData => {
            res.json(userData)
        })
        .catch(err => {
            // Send a error message in response
            res.json({ message: `There was an error retrieving photos: ${err}` })
        })
};

// Get a specific photo
exports.getPhoto = async (req, res) => {
    knex('photos')
        .where('id', req.params.id)
        .then(userData => {
            res.json(userData)
        })
        .catch(err => {
            // Send a error message in response
            res.json({ message: `There was an error retrieving a photo: ${err}` })
        })
};

// Make a photo
exports.makePhoto = async (req, res) => {
    knex('photos')
        .insert({
            'src': req.body.src,
            'src_hr': req.body.src_hr,
            'name': req.body.name,
            'description': req.body.description,
            'width': req.body.width,
            'height': req.body.height,
            'flags': req.body.flags
        })
        .then(() => {
            // Send a success message in response
            res.json({ message: `A photo was created.` })
        })
        .catch(err => {
            // Send a error message in response
            res.json({ message: `There was an error creating a photo: ${err}` })
        })
};

// Flag a specific photo
exports.flagPhoto = async (req, res) => {
    // Find specific photo in the database and flag it
    knex('photos')
        .where('id', req.body.id)
        .increment('flags')
        .then(() => {
            // Send a success message in response
            res.json({ message: `Photo ${req.body.id} flagged.` })
        })
        .catch(err => {
            // Send a error message in response
            res.json({ message: `There was an error flagging ${req.body.id} photo: ${err}` })
        })
};

// Delete a photo
exports.deletePhoto = async (req, res) => {
    knex('photos')
        .where('id', req.body.id) 
        .del() 
        .then(() => {
            res.json({ message: `Photo ${req.body.id} deleted.` })
        })
        .catch(err => {
            res.json({ message: `There was an error deleting ${req.body.id} photo: ${err}` })
        })
};
