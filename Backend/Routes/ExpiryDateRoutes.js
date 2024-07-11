const express = require('express');
const router = express.Router();
const expiryDateController = require('../Controllers/ExpiryDateController');

console.log("Yes Expiring Routes found!")

router.post('/candy/:id/expiry', expiryDateController.addExpiryDate);
router.delete('/expiry/:id', expiryDateController.deleteExpiryDate);
router.get('/expiring', expiryDateController.getAllExpiring);



module.exports = router;