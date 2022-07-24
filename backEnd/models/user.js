const mongoose = require('mongoose')

const {Schema} = mongoose

const User = mongoose.model(
 'User',
 new Schema({
    title: {
       type: String,
       required: true,
    },
    description: {
        type: String,
        required: true,
     },
 }),
)

module.exports = User
