const { Schema, model } = require("mongoose")
const bcrypt = require("bcrypt")

const userLoginSchema = new Schema({
    loginId: {
        type: Number,
        requied: true,
        unique: true
    },
    userId: {
        type: Schema.Types.ObjectId(),
        ref: "UserDetail"
    },
    username: {
        type: String,
        lowercase: true,
        unique: true,
        index: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return v.length < 8;
            },
            message: props => `${props.value} is not a valid password. It must be exactly 8 characters long.`
        }
    }
}, { timestamps: true })

userLoginSchema.pre('save', async function (next) {
    const doc = this;
    if (!doc.isNew) {
        return next();
    }

    try {
        // Find the highest userId
        const highestUser = await mongoose.model('userLogins').findOne({}, {}, { sort: { 'userId': -1 } }).exec();

        // Increment the highest userId by 1 or start from 5001 if no documents exist yet
        doc.userId = highestUser ? highestUser.userId + 1 : 5001;

        // Hash the password using bcrypt if it's modified
        if (doc.isModified('password')) {
            doc.password = await bcrypt.hash(doc.password, 16);
        }

        next();
    } catch (error) {
        return next(error);
    }
});

const UserLogin = model("UserLogin", userLoginSchema)

module.exports = UserLogin