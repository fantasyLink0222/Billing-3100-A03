const mongoose = require("mongoose");
const invoiceSchema = new mongoose.Schema({
  
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
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