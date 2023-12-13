const InvoiceController = require("../controllers/InvoiceController");

const fs = require("fs").promises;
const path = require("path");

const express = require("express");
const invoiceRouter = express.Router();

// construct the path to our data folder
const dataPath = path.join(__dirname, "../data/");

invoiceRouter.get("/", InvoiceController.Index);

// note that the create route need to come before the detail routes or else it will be interpreted as a detail route
invoiceRouter.get("/create", InvoiceController.Create);
invoiceRouter.post("/create", InvoiceController.createInvoice);

// invoiceRouter.get("/:id", InvoiceController.Detail);
// invoiceRouter.get("/:id/delete", InvoiceController.DeleteProfileById);
// invoiceRouter.get("/search", InvoiceController.SearchProducts);


module.exports = invoiceRouter;
