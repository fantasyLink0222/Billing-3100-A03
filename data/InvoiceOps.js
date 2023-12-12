const Invoice = require("../models/Invoice.js");

class InvoiceOps {
    // empty constructor
    InvoiceOps() {}
    
    // DB methods
    async getAllInvoices() {
        console.log("getting all invoices");
        let invoices = await Invoice.find().sort({ name: 1 });
        return invoices;
    }
    
    async getInvoiceById(id) {
        console.log(`getting invoice by id ${id}`);
        let invoice = await Invoice.findById(id);
        return invoice;
    }
    
    async createInvoice(invoiceObj) {
        try {
        const error = await invoiceObj.validateSync();
        if (error) {
            const response = {
            obj: invoiceObj,
            errorMsg: error.message,
            };
            return response; // Exit if the model is invalid
        }
    
        // Model is valid, so save it
        const result = await invoiceObj.save();
        const response = {
            obj: result,
            errorMsg: "",
        };
        return response;
        } catch (error) {
        const response = {
            obj: invoiceObj,
            errorMsg: error.message,
        };
        return response;
        }
    }
    
    async deleteInvoiceById(id) {
        console.log(`deleting invoice by id ${id}`);
        const invoice = await Invoice.findByIdAndDelete(id);
        return invoice;
    }
}

module.exports = InvoiceOps;

