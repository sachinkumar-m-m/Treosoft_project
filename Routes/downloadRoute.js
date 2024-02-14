const express = require('express');
const router = express.Router();
const downloadController = require('../Controllers/downloadController');
const Createcsv = require('../middelware/createcsv')

router.get('/all', 
Createcsv.createCustomerCsv,
downloadController.downloadAllCustomers


);
router.get('/birthdays',
Createcsv.createBirthdayCsv,
downloadController.downloadBirthdays,
);

router.get('/spending', 
Createcsv.createHighSpendingCustomersCsv,
downloadController.downloadHighSpendingCustomers,
);


module.exports = router
