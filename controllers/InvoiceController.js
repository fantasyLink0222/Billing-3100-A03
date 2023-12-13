const Invoice = require("../models/Invoice.js");
const InvoiceOps = require("../data/InvoiceOps");

const _invoiceOps = new InvoiceOps();

// exports.searchProfiles = async function(req, res) {
//   const searchQuery = req.query.q;

//   try {
//     const profiles = await _profileOps.find({
//       name: { $regex: searchQuery, $options: "i" }
//     });

//     res.render("profiles", { profiles: profiles, layout: "layouts/full-width" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   } 
// };

exports.Index = async function (request, response) {
  console.log("loading invoices from controller");
  let invoices = await _invoiceOps.getAllInvoices();
  if (invoices) {
    response.render("invoices", {
      title: "Invoices",
      invoices: invoices,
      layout: "layouts/full-width",
      errorMessage: "",
    });
  } else {
    response.render("invoices", {
      title: "invoices",
      invoices: [],
      errorMessage: "",
      layout: "layouts/full-width"
    });
  }
};

// exports.Detail = async function (request, response) {
//   const profileId = request.params.id;
//   console.log(`loading single profile by id ${profileId}`);
//   let profile = await _profileOps.getProfileById(profileId);
//   let profiles = await _profileOps.getAllProfiles();

//   if (profile) {
//     response.render("profileDetails", {
//       title: "Express Yourself - " + profile.name,
//       profiles: profiles,
//       profileId: request.params.id,
//       profile: profile,
//       layout: "layouts/full-width"
//     });
//   } else {
//     response.render("profiles", {
//       title: "Billing - Clients",
//       profiles: [],
//       layout: "layouts/full-width"
//     });
//   }
// };

// Handle profile form GET request
exports.Create = async function (request, response) {
    console.log("Create invoice")
  response.render("invoice-create", {
    title: "Create invoice",
    errorMessage: "",
    invoice: {},
    layout: "layouts/full-width"
  });
};

// Handle profile form GET request
exports.createInvoice = async function (request, response) {
  // instantiate a new Profile Object populated with form data
  let tempInvoiceObj = new Invoice({
    name: request.body.name,
    invoiceNum: request.body.invoiceNum,
    issuedDate: request.body.issuedDate,
    dueDate: request.body.dueDate,
    product: request.body.product,
    quantity: request.body.quantity
  });

  //
  let responseObj = await _invoiceOps.createInvoice(tempInvoiceObj);

  // if no errors, save was successful
  if (responseObj.errorMsg == "") {
    let invoices = await _invoiceOps.getAllInvoices();
    console.log(responseObj.obj);
    response.render("invoices", {
      title: "invoices " + responseObj.obj.name,
      invoices: invoices,
      invoiceId: responseObj.obj._id.valueOf(),
      layout: "layouts/full-width"
    });
  }
  // There are errors. Show form the again with an error message.
  else {
    console.log("An error occured. Item not created.");
    response.render("invoice-create", {
      title: "Create invoice",
      invoice: responseObj.obj,
      errorMessage: responseObj.errorMsg,
      layout: "layouts/full-width"
    });
  }
};

// // Handle profile form GET request
// exports.DeleteProfileById = async function (request, response) {
//   const profileId = request.params.id;
//   console.log(`deleting single profile by id ${profileId}`);
//   let deletedProfile = await _profileOps.deleteProfileById(profileId);
//   let profiles = await _profileOps.getAllProfiles();

//   if (deletedProfile) {
//     response.render("profiles", {
//       title: "Billing - Clients",
//       profiles: profiles,
//       errorMessage: "",
//       layout: "layouts/full-width"
//     });
//   } else {
//     response.render("profiles", {
//       title: "Billing - Clients",
//       profiles: profiles,
//       errorMessage: "Error.  Unable to Delete",
//       layout: "layouts/full-width"
//     });
//   }
// };
