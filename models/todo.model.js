// the Joi import here was only used for an invalid mongoose type and can be removed
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    completed: {
        // use the JavaScript Boolean constructor so mongoose recognizes the type
        type: Boolean,
        default: false
    }
});

const TodoModel = mongoose.model("Todo", todoSchema)

module.exports = TodoModel;