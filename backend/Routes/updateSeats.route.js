const express = require("express");
const { AddSeats } = require("../Controller/AddSeats");
const { InitialSeats } = require("../Controller/InitialSeats");
const { ReserveModel } = require("../Models/Reserve.Model");

const updateSeatsRouter = express.Router();


updateSeatsRouter.patch("/seats", async (req, res) => {
    try {
        let seats = await ReserveModel.find();
        const { no_of_seats } = req.body;

        if (seats.length === 0) {
            let matrix = InitialSeats();
            for (let i = 0; i < Number(no_of_seats); i++) {
                matrix[0][i] = 1;
            }
            const save_matrix = new ReserveModel({ matrix, "booked": no_of_seats });
            await save_matrix.save();
            return res.status(201).send({ "message": "Successfully booked seats" });
        } else {

            let { matrix, _id, booked } = seats[0];
            let mat = AddSeats(matrix, no_of_seats);
            const payload = { "matrix": mat, "booked": Number(no_of_seats) + Number(booked) };
            await ReserveModel.findByIdAndUpdate({ _id }, payload);
            return res.status(200).send({ "message": "Successfully booked seats" })
        }
    } catch (error) {
        console.log(error, "error");
        return res.status(400).send({ "message": "Error in booking seats" });
    }
})

module.exports = {
    updateSeatsRouter
}