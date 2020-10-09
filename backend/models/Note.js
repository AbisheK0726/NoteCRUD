const mongoose = require("mongoose");
const NoteSchema = new mongoose.Schema({
    title:{
        type:String,
        required: [true, 'Enter Your Title']
    },

    author:{
        type:String,
        required: [true, 'Enter Your Name']
    },

    dateTime:{
        type:Date,
        default:Date.now
    },

    category:{
        type:String,
        required: [true, 'What Is This Note For']
    },

    description:{
        type:String
    },

    completed:{
        type:Boolean
    },

    priority:{
        type:Number,
        required:[true, 'How important is this note']
    }

})

module.exports = mongoose.model('Note', NoteSchema)