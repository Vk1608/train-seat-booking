const mongoose = require("mongoose");

const reserveSchema = mongoose.Schema({
    matrix: Array,
    booked: Number
})

const ReserveModel = mongoose.model("reserve", reserveSchema);

module.exports = {
    ReserveModel
}