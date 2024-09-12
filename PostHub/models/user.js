const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/PostHubDB");

const userSchema = mongoose.Schema({
    username : String,
    name: String,
    age: Number,
    email: String,
    password: String,
    posts: [                  // future mei user post bhi bnayega, so array created of id's
        { type : mongoose.Schema.Types.ObjectId, ref : "post"
                }
    ],
})

module.exports = mongoose.model('user', userSchema);
