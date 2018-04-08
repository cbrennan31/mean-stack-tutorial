const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
  email: {
    type: String,
    minlength: 1,
    trim: true,
    required: true,
    unique: true,
    // validate: {
    //   validator: (value) => {
    //     validator: validator.isEmail
    //   },
    //   message: '{VALUE} is not a valid email!'
    // }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  }
})

let User = mongoose.model('User', UserSchema)

module.exports = { User };
