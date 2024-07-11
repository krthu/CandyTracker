const express = require('express');
const router = express.Router();
const candyController = require('../Controllers/CandyController');
const expiryDateController = require('../Controllers/ExpiryDateController');

router.get('/', candyController.getAllCandies);
router.post('/', candyController.createCandy);
router.get('/:id', candyController.getCandyById);
router.put('/:id', candyController.updateCandy);
router.delete('/:id', candyController.deleteCandy);


router.post('/:id/expiry', expiryDateController.addExpiryDate);
router.delete('/expiry/:id', expiryDateController.deleteExpiryDate);

module.exports = router;