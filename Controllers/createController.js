const Customer = require('../Models/customerModel');
const Outlet = require('../models/outletModel');
const apiResponse = require('../Helper/apiResponse')

exports.createOutlet = async (req, res, next) => {
  try {
    const newOutlet = await Outlet.create(req.body);
    return apiResponse.successResponseWithData(res, "outlet created  Succesfully", newOutlet)
  } catch (error) {
    console.error(error);
    return apiResponse.somethingResponse(res);
  }
};

exports.createCustomer = async (req, res) => {
    try {
        const { outletId, phoneNumber, name, birthday, anniversary, amountSpent, itemsConsumed } = req.body;
        const customer = new Customer({
            outletId,
            phoneNumber,
            name,
            birthday,
            anniversary,
            amountSpent,
            itemsConsumed
        });

      await customer.save();
      return apiResponse.successResponseWithData(res, "custmor created  Succesfully", customer)

    } catch (error) {
        console.error(error);
        return apiResponse.somethingResponse(res);
    }
};