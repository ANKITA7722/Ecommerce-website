const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");

// Creating Order
router.post("/orders", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.KEY_ID,
            key_secret: process.env.KEY_SECRET,
        });

        const options = {
            amount: req.body.amount * 100, // Convert to smallest currency unit (paise for INR)
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
        };

        // Use async/await for Razorpay order creation
        const order = await instance.orders.create(options);
        res.status(200).json({ data: order });
    } catch (error) {
        console.error("Error creating order:", error.message);
        res.status(500).json({ message: "Internal Server Error!" });
    }
});

// Verifying the Payment
router.post("/verify", async (req, res) => {
    try {
        const { razorpay_orderID, razorpay_paymentID, razorpay_signature } = req.body;

        const sign = razorpay_orderID + "|" + razorpay_paymentID;
        const expectedSignature = crypto
            .createHmac("sha256", process.env.KEY_SECRET)
            .update(sign)
            .digest("hex");

        if (razorpay_signature === expectedSignature) {
            return res.status(200).json({ message: "Payment verified successfully" });
        } else {
            return res.status(400).json({ message: "Invalid signature. Payment verification failed." });
        }
    } catch (error) {
        console.error("Error verifying payment:", error.message);
        res.status(500).json({ message: "Internal Server Error!" });
    }
});

module.exports = router;
