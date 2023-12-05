import mongoose from "mongoose";

const UnitSchema = new mongoose.Schema({
    year: {
        type: int,
        required: true,
    },
    capacity: {
        type: int,
        required: true,
    },
})