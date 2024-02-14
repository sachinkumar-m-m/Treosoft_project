const path = require('path');
const fs = require('fs');
const apiResponse = require('../Helper/apiResponse')
const Customer = require('../Models/customerModel');


exports.downloadAllCustomers = async (req, res, next) => {
    try {
        const customers = await Customer.aggregate([
            {
                $lookup: {
                    from: 'outlets', 
                    localField: 'outletId',
                    foreignField: '_id',
                    as: 'outlet'
                }
            },
            { $unwind: '$outlet' },
            {
                $project: {
                    _id: 0,
                    outletName: '$outlet.name',
                    outletLocation: '$outlet.location',
                    phoneNumber: 1,
                    name: 1,
                    birthday: 1,
                    anniversary: 1,
                    amountSpent: 1,
                    itemsConsumed: 1
                }
            }
        ]);
        const csvWriter = req.body.csvWriter;
        const filePath = req.body.filePath;
        await csvWriter.writeRecords(customers);
        res.download(filePath);
        return apiResponse.successResponseWithData(res, "All Customers downloaded Successfully", customers);
    } catch (error) {
        console.error(error);
        return apiResponse.somethingResponse(res);
    }
};

exports.downloadBirthdays = async (req, res) => {
    try {
        const currentMonth = new Date().getMonth() + 1; 
        const customers = await Customer.find({
            $expr: {
                $eq: [{ $month: "$birthday" }, currentMonth]
            }
        });

        await req.csvWriter.writeRecords(customers);
        res.download(req.filePath);
        return apiResponse.successResponseWithData(res, "All Customers downloaded Successfully", customers);

    } catch (error) {
        console.error(error);
        return apiResponse.somethingResponse(res);
    }
};

exports.downloadHighSpendingCustomers = async (req, res, next) => {
    try {
        const customers = await Customer.find({ amountSpent: { $gte: 3000 } });
        const csvWriter =req.body.csvWriter
        await csvWriter.writeRecords(customers);
        res.download('high_spenders.csv');
        return apiResponse.successResponseWithData(res, "listed All high spending customer Succesfully", customers)

    } catch (error) {
        console.error(error);
       return apiResponse.somethingResponse(res);

    }
};
