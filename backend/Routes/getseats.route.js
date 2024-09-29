const express = require("express");
const { ReserveModel } = require("../Models/Reserve.Model");

const getSeatsRouter = express.Router();

getSeatsRouter.get("/", async (req, res) => {
    try {
        const seats = await ReserveModel.find();
        res.status(200).send({ "message": seats });
    } catch (error) {
        console.log(error, "error in get request");
        res.status(400).send({ "message": "Error in GET seats Request" });
    }
})

module.exports = {
    getSeatsRouter
}