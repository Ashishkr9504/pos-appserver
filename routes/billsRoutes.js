const express = require("express");
const {
  addBillsController,
  getBillsController,
} = require("../controllers/billsController");
const router = express.Router();

router.get("/get-bills", getBillsController);
router.post("/add-bills", addBillsController);




module.exports = router;