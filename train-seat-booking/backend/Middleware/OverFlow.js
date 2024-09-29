const { ReserveModel } = require("../Models/Reserve.Model");
const OverFlow = async (req, res, next) => {
    let seats = await ReserveModel.find();
    if (seats.length > 0) {
        let { booked } = seats[0];
        let { no_of_seats } = req.body;
        if (Number(booked) + Number(no_of_seats) > 80) {
            if (80 - (Number(booked)) <= 0) {
                return res.status(200).send({ "msg": "No seats available,Please try later" });
            }
            return res.status(200).send({ "msg": `Only ${80 - (Number(booked))} seats availabe to book` })
        } else {
            next();
        }
    } else {
        next();
    }
}

module.exports = {
    OverFlow
}