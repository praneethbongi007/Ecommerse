const { Router } = require("express")
const Razorpay = require("razorpay");
const { paymentCollection } = require("../mongoDBConfig");
const rzpRouter = new Router();




rzpRouter.post("/create", async (req, res) => {

    try {
        const { amount, currency, receipt, cartId, userId } = req.body
        var response = new Razorpay({ key_id: process.env.RZP_ID, key_secret: process.env.RZP_SECRET })

        instance.orders.create({
            amount: 50000,
            currency: "INR",
            receipt: "receipt#1",
            notes: {
                cartId, userId
            }
        })
        res.send(response);
        res.end();
    } catch (error) {
        res.send({ err: error.message })
        res.end();

    }


})


rzpRouter.post("/paymentInfo", async (req, res) => {

    try {
        const { rzpPayId, rzpOrdId, rzpPaySignature } = req.body
        generated_signature = hmac_sha256(rzpPayId + "|" + rzpOrdId, process.env.RZP_SECRET);

        if (generated_signature = rzpPaySignature) {
            const data = paymentCollection.insertOne({ rzpOrdId, rzpPayId, rzpPaySignature })
            res.send(response);
            res.end();
        }
        else {
            res.send({ err: "signature invalid" })
            res.end();


        }

    } catch (error) {
        res.send({ err: error.message })
        res.end();

    }


})
module.exports = rzpRouter