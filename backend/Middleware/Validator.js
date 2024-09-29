const Validator = (req, res, next) => {
    const { no_of_seats } = req.body;
    if (Number(no_of_seats) > 0 && Number(no_of_seats) <= 7) {
        next();
    } else if (Number(no_of_seats) > 7) {
        res.send({ "message": "A person can book 7 seats at maximum at a time" })
    } else if (Number(no_of_seats) <= 0) {
        res.send({ "message": "Please Enter a Valid Number" });
    }
}

module.exports = {
    Validator
}