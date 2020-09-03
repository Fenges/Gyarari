const express = require('express');

const photosRoutes = require('./../controllers/photos-controller.js');

const router = express.Router();

router.get('/list', photosRoutes.listPhotos);
router.get('/:id', photosRoutes.getPhoto);
router.post('/create', photosRoutes.makePhoto);
router.put('/flag', photosRoutes.flagPhoto);
router.put('/delete', photosRoutes.deletePhoto);

// Export router
module.exports = router;
