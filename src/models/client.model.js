import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
        trim: true,
    },
    Contact: {
        type: String,
        required: true,
        trim: true,
    },
    phoneContact: {
        type: String,
        required: true,
        trim: true,
    },
})

export default mongoose.model('Client', clientSchema)