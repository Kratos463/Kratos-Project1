const { Schema, model } = require("mongoose")

const userDetailsSchema = new Schema({
    userId: {
        type: Number,
        unique: true,
        required: true,
        index: true,
    },
    sponser: {
        type: String,
        required: true,
        trim: true,
    },
    firstName: {
        type: string,
        required: true,
        trim: true
    },
    lastName: {
        type: string,
        required: true,
        trim: true
    },
    address: {
        type: string,
        required: true,
        trim: true
    },
    postalCode: {
        type: string,
        required: true,
        trim: true
    },
    city: {
        type: string,
        required: true,
        trim: true
    },
    country: {
        type: string,
        required: true,
        trim: true
    },
    userType: {
        type: String,
        enum: ['customer', 'affiliate'],
        default: 'customer'
    },
    pp_tc: {
        type: Boolean,
        required: true
    },
    atc_id: {
        type: Boolean,
        required: true
    },
    newsLetter: {
        type: Boolean,
        default: false
    }
})

userDetailsSchema.pre('save', function(next) {
    const doc = this;
    if (!doc.isNew) {
        return next();
    }

    mongoose.model('userDetails').findOne({}, {}, { sort: { 'userId': -1 } }, function(err, highestUser) {
        if (err) {
            return next(err);
        }
        // Increment the highest userId by 1 or start from 1 if no documents exist yet
        doc.userId = highestUser ? highestUser.userId + 1 : 5001;
        next();
    });
});

const UserDetails = model("UserDetail", userDetailsSchema)

module.exports = UserDetails
