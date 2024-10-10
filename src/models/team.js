import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    driver1: { type: String, required: true },
    driver2: { type: String, required: true },
    chassi: { type: String, required: true },
    engine: { type: String, required: true },
    budget: { type: Number, required: true },
    player: { type: String, required: true }
});

export default mongoose.model("Team", teamSchema);