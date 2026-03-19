import mongoose, { Schema } from 'mongoose'
// import jwt from 'jsonwebtoken'
// import bcrypt from 'bcrypt'

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, // one who is subscripting
        ref: 'User'
    },
    channel: {
        type: Schema.Types.ObjectId, // one to  whom subscriber is subscripting
        ref: 'User'
    },
},
    {
        timestamps: true
    }
)

export const Subscription = mongoose.model("Subscription", subscriptionSchema)