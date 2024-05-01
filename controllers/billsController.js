const billsModel = require("../models/billsModal")
const addBillsController = async (req, res) => {
  try {
    const newBill = new billsModel(req.body);
    await newBill.save();
    res.send("Bill Created Successfully!");
  } catch (error) {
    res.send( "something went wrong"); // Sending error message in the response body
    console.log(error);
  }
};
const getBillsController = async (req, res) => {
  try {
    const bills = await billsModel.find();
    res.send(bills);
  } catch (error) {
    console.log(error);
  }
};
module.exports ={
  addBillsController,
  getBillsController,
};