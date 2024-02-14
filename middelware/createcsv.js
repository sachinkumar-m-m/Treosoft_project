const { createObjectCsvWriter } = require('csv-writer');
const apiResponse = require('../Helper/apiResponse')
const path = require('path');

exports.createCustomerCsv = async (req, res, next) => {
    try {
        const timestamp = Date.now(); 
        const fileName = `all_customers_${timestamp}.csv`;
        const filePath = path.join(__dirname, '..', 'exports', fileName);


        const csvHeader = [
            { id: 'outletName', title: 'Outlet Name' },
            { id: 'outletLocation', title: 'Outlet Location' },
            { id: 'phoneNumber', title: 'Phone Number' },
            { id: 'name', title: 'Name' },
            { id: 'birthday', title: 'Birthday' },
            { id: 'anniversary', title: 'Anniversary' },
            { id: 'amountSpent', title: 'Amount Spent' },
            { id: 'itemsConsumed', title: 'Items Consumed' }
        ];

        const csvWriter = createObjectCsvWriter({
            path: filePath,
            header: csvHeader
        });

        req.body.csvWriter = csvWriter;
        req.body.filePath = filePath; 
        return next();
    } catch (error) {
        console.error(error);
        return apiResponse.somethingResponse(res);
    }
};

exports.createBirthdayCsv = async (req, res, next) => {
    try {
        const timestamp = Date.now(); 
        const fileName = `all_Birthday_month_${timestamp}.csv`;
        const filePath = path.join(__dirname, '..', 'exports', fileName);

        const csvHeader = [
            { id: 'phoneNumber', title: 'Phone Number' },
            { id: 'name', title: 'Name' },
            { id: 'birthday', title: 'Birthday' },
        ];

        const csvWriter = createObjectCsvWriter({
            path: filePath,
            header: csvHeader
        });

        req.csvWriter = csvWriter;
        req.filePath = filePath; 
        return next();
    } catch (error) {
        console.error(error);
        return apiResponse.somethingResponse(res);
    }
};

exports.createHighSpendingCustomersCsv = async (req, res, next) => {
    try {
        const timestamp = Date.now(); 
        const fileName = `high_spending_Customer_${timestamp}.csv`;
        const filePath = path.join(__dirname, '..', 'exports', fileName);

        const csvHeader = [
            { id: 'outletId', title: 'Outlet ID' },
            { id: 'phoneNumber', title: 'Phone Number' },
            { id: 'name', title: 'Name' },
            { id: 'birthday', title: 'Birthday' },
            { id: 'anniversary', title: 'Anniversary' },
            { id: 'amountSpent', title: 'Amount Spent' },
            { id: 'itemsConsumed', title: 'Items Consumed' }
        ];

        const csvWriter = createObjectCsvWriter({
            path: filePath,
            header: csvHeader
        });

        req.body.csvWriter = csvWriter;
        req.body.filePath = filePath; 
        return next();
    } catch (error) {
        console.error(error);
        return apiResponse.somethingResponse(res);
    }
};


