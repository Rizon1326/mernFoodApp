const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;
    await data.splice(0, 0, { Order_date: req.body.order_date });

    try {
        let eId = await Order.findOne({ "email": req.body.email });
        console.log(eId);

        if (eId === null) {
            // If no existing order, create a new order
            await Order.create({
                email: req.body.email,
                order_data: [data]
            });
            res.json({ success: true });
        } else {
            // If order exists, update the existing order with new data
            await Order.findOneAndUpdate(
                { email: req.body.email },
                { $push: { order_data: data } }
            );
            res.json({ success: true });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error: " + error.message);
    }
});
router.post('/orderData', async (req, res) => {
    try {
      let myData = await Order.findOne({"email":req.body.email})
      res.json({orderData:myData})
    }catch(error){
        res.status(500).send("Server Error: " + error.message);
    }
})
module.exports = router;
