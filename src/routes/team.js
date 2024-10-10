import express from "express";
import mongoose from "mongoose";
import Team from "../models/team.js";

const router = express.Router();

router.get("/listteams", (req, res) => {
    Team.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.post("/createteam", (req, res) => {
    const team = new Team({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        driver1: req.body.driver1,
        driver2: req.body.driver2,
        chassi: req.body.chassi,
        engine: req.body.engine,
        budget: req.body.budget,
        player: req.body.player
    });
    team
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Handling POST requests to /createteam",
                createdTeam: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

export default router;