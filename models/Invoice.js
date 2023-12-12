const mongoose = require("mongoose");
const invoiceSchema = new mongoose.Schema({
  
    name: {
        type: "String",
        required: true,
    },
    invoiceNum: {
      type: "String",
      required: true,
    },
    issuedDate: {
      type: "String",
      required: true,
    },
    dueDate: {
        type: "String",
        required: true,
    },
    product: {
        type: "String",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    
},
    {collection: "invoices"}
);
const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;