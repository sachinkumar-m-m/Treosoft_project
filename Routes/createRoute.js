const express = require('express');
const router = express.Router();
const createContoler  = require("../Controllers/createController")



router.post('/customers',
createContoler.createCustomer
);

router.post('/outlet',
createContoler.createOutlet
);

module.exports = router