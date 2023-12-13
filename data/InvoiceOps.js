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

//   async getProfileById(id) {
//     console.log(`getting profile by id ${id}`);
//     let profile = await Profile.findById(id);
//     return profile;
//   }

  async createInvoice(invoiceObj) {
    try {
      const error = await profileObj.validateSync();
      if (error) {
        const response = {
          obj: profileObj,
          errorMsg: error.message,
        };
        return response; // Exit if the model is invalid
      }

      // Model is valid, so save it
      const result = await profileObj.save();
      const response = {
        obj: result,
        errorMsg: "",
      };
      return response;
    } catch (error) {
      const response = {
        obj: profileObj,
        errorMsg: error.message,
      };
      return response;
    }
  }
  

//   async deleteINvoiceById(id) {
//     console.log(`deleting invoice by id ${id}`);
//     let result = await Invoice.findByIdAndDelete(id);
//     console.log(result);
//     return result;
//   }

  //method for searchbar 
//   async find(query) {
//     try {
//       const products = await Profile.find(query);
//       return products;
//     } catch (error) {
//       throw new Error(`Error finding products: ${error.message}`);
//     }
//   }

  
}

module.exports = InvoiceOps;
