const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    price: {type: Number}
});



const Subscription = mongoose.model("Subscription", SubscriptionSchema);
// Delete the existing model if it exists
// if (mongoose.models.Subscription) {
//     delete mongoose.models.Subscription;
//   }
module.exports = Subscription;