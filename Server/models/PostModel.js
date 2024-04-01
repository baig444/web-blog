const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

    category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String
    },
    description: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Post", postSchema)