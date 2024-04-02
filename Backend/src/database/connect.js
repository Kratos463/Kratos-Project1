const mongoose = require("mongoose")
const {DB_NAME} = require("../constants.js")

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\n MongoDb connnected... !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("Error while connecting database", error)
        process.exit(1)
    }
}

module.exports = connectDB