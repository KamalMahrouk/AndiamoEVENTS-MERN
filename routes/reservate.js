const express = require("express");
const Reservate = require("../models/reservate");
const reservateRouter = express.Router();

//add service
reservateRouter.post("/add", async (req, res) => {
  try {
    let newreservate = new Reservate(req.body);
    let result = await newreservate.save();
    res.send({ reservate: result, msg: "reservate is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all reservates
reservateRouter.get("/", async (req, res) => {
  try {
    let result = await Reservate.find();
    res.send({ reservates: result, msg: "all reservations" });
  } catch (error) {
    console.log(error);
  }
});

//get reservate by id
reservateRouter.get("/:id", async (req, res) => {
  try {
    let result = await Reservate.findById(req.params.id);
    res.send({ reservate: result, msg: "reservation" });
  } catch (error) {
    console.log(error);
  }
});

reservateRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Reservate.findByIdAndDelete(req.params.id);
    res.send({ msg: "reservation is deleted" });
  } catch (error) {
    console.log(error);
  }
});

//update reservation
reservateRouter.put("/:id", async (req, res) => {
  try {
    let result = await Reservate.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ reservate: "result", msg: "reservation is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = reservateRouter;